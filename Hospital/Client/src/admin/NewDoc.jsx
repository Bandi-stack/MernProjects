import React, { useState } from "react";
import axios from "axios";

const NewDoc = () => {
  const [doctor, setDocts] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  // Handle File Change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreview(reader.result);
    };
  };

  // Handle Form Submission
  const handleAdd = async () => {
    try {
      const formData = new FormData();
      formData.append("doctor", doctor);
      formData.append("phone", phone);
      formData.append("adress", adress);
      if (image) formData.append("image", image);

      const { data } = await axios.post("http://localhost:3005/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      // Update UI
      setDocts("");
      setPhone("");
      setAdress("");
      setImage(null);
      setPreview("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="create_form">
      <input
        type="text"
        value={doctor}
        placeholder="Enter Doctor's Name"
        onChange={(e) => setDocts(e.target.value)}
      />
      <input
        type="number"
        value={phone}
        placeholder="Phone Number"
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="text"
        value={adress}
        placeholder="Doctor's Address"
        onChange={(e) => setAdress(e.target.value)}
      />
      <input type="file" accept="image/*" onChange={handleFileChange} />

      {preview && <img src={preview} alt="Preview" width="100" />}

      <button type="button" onClick={handleAdd}>
        Add Doctor
      </button>
    </div>
  );
};

export default NewDoc;
