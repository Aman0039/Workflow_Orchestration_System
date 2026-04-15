const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const UserModel = require("../models/userSchema");
const saltRounds = 8;
const AuthRouter = express.Router();


//Signup logic
AuthRouter.post("/signup", async (req, res) => {
    try {
        const { username, email, password, confirmPassword } = req.body;


        if (username && email && password) {

            if (password !== confirmPassword) return res.status(400).json({ message: "password doesn't match , try again" });

            const existingUser = await UserModel.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: "User already exists" });
            }

            //compare two password.


            //hashing password and storing data in DB.
            bcrypt.hash(password, saltRounds, async function (err, hash) {
                if (err) {
                    console.log(err);
                    res.status(403).json({ message: "Something went wrong!" });
                }
                else {
                    await UserModel.create({
                        username,
                        email,
                        password: hash
                    })
                    res.status(200).json({ message: `Welcome ${username} Signup Successful🎉` })
                }
            })
        }
        else {
            res.status(400).json({ message: "All fields are required!" });
        }
    } catch (error) {

        //Internal server error
        console.log(error.message);
        res.status(500).json({ message: "Something went wrong!" });
    }
})


//handle login users
AuthRouter.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User does not exist please sign up." });
        }

        bcrypt.compare(password, user.password, function (err, result) {
            if (err) {
                return res.status(500).json({ message: "Something went wrong!" });
            }
            else if (result) {
                var token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY);

                console.log(token);

               return res.status(200).json({ message: "logged in Successful", token });
            }
            else {
               return res.status(401).json({ message: "Invalid credentials." })
            }
        });

    } catch (error) {
        //Internal server error

        console.log(error.message);
        return res.status(500).json({ message: "Something went wrong!" });
    }
})

module.exports = AuthRouter;