const mongoose = require("mongoose");

const connectToDB = async()=>{
try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Workflow-System");
    console.log("DB Connected");
} catch (error) {
    res.status(500).json({message:"Something went wrong"})
}
}

module.exports = connectToDB;