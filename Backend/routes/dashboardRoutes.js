const express = require("express");

const DashboardRouter = express.Router();

DashboardRouter.get("/" , (req, res)=>{
    res.status(200).json({message:"you can access dashboard.."})
})

module.exports = DashboardRouter