const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const AuthenticModel=require('./Models/AuthenticData')
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/authentication")

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    AuthenticModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                res.json("success")
                }
                else {
                    res.json("Mismatch password")
                }
            }
            else {
                res.json("Not regsitered. Please Register")
            }
    })
})

app.post('/signup', (req, res) => {
    AuthenticModel.create(req.body)
        .then(signingUp => res.json(signingUp))
        .catch(err=>res.json(err))
})

app.listen(3001, () => {
    console.log("server is running")
})
