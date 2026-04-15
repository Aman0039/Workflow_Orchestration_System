require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connectToDB = require("./config/connectToDB");
const AuthRouter = require("./routes/authRouter");
const DashboardRouter = require("./routes/dashboardRoutes");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();
const PORT = process.env.PORT || 5050;

connectToDB();

app.use(cors()); //cors middleware

app.use(express.json()); //body parser middlewares

//test route.
app.get("/test", (req, res) => {
    res.status(200).json({ message: "this is the test route!" });
})

//user routes;
app.use("/auth" , AuthRouter);

//handle dashboard routes
app.use("/dashboard" ,authMiddleware , DashboardRouter );


//handle unknown routes.
app.use((req, res) => {
    try {
        res.status(404).json({ message: "Unknown Route" })
    } catch (error) {
        console.log("Something Went Wrong");
        res.status(400).json({ message: "Bad Request" })
    }
})

// starting server
app.listen(PORT, () => {
    console.log(`server is started on http://localhost:${PORT}`);
})