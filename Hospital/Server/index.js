const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt=require('bcryptjs')
const multer = require('multer');
const DocsModel = require('./Models/docData');
const UserModel = require('./Models/user');

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" })); // Accept JSON requests
mongoose.connect('mongodb://127.0.0.1:27017/doctor_datas');

// Multer Setup for Image Upload
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Fetch all doctors' data
app.get('/get', (req, res) => {
    DocsModel.find()
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

// Add Doctor with Image
app.post("/add", upload.single("image"), async (req, res) => {
    try {
        const { doctor, phone, adress } = req.body;
        if (!doctor || !phone || !adress) {
            return res.status(400).json({ message: "All fields are required" });
        }

        let base64Image = "";
        if (req.file) {
            base64Image = req.file.buffer.toString("base64");
        }

        const newDoctor = await DocsModel.create({
            doctor,
            phone,
            adress,
            image: base64Image,
            availability: false // Default status is "Inactive"
        });

        res.json(newDoctor);
    } catch (err) {
        res.json(err);
    }
});

// Update Doctor Data
app.put('/update/:id', upload.single('image'), async (req, res) => {
    const { id } = req.params;
    const { doctor, phone, adress } = req.body;

    try {
        // Prepare the updated fields
        const updateData = { doctor, phone, adress };

        // If a new image is uploaded, update the image
        if (req.file) {
            updateData.image = req.file.buffer.toString("base64");
        }

        // Update the document in the database
        const updatedDoc = await DocsModel.findByIdAndUpdate(
            id,
            updateData,
            { new: true } // Return the updated document
        );

        if (!updatedDoc) {
            return res.status(404).json({ message: "Doctor not found" });
        }

        res.json(updatedDoc);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Toggle Availability (Active/Inactive)
app.put("/toggle-availability/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const doctor = await DocsModel.findById(id);
        if (!doctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }

        // Toggle availability
        doctor.availability = !doctor.availability;
        await doctor.save();

        res.json({ success: true, availability: doctor.availability });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err });
    }
});

// Delete Doctor
app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    DocsModel.findByIdAndDelete(id)
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

//login 
app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await UserModel.findOne({ username });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        res.json({ message: "Login successful" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// Register Route
app.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;
        const existingUser = await UserModel.findOne({ username });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({ username, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

app.listen(3005, () => {
    console.log("Server is running on port 3005");
});
