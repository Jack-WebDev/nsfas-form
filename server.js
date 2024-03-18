
const dotenv = require("dotenv")
dotenv.config()
const express = require("express");
const app = express();
const cors = require("cors");
const formRouter = require("./backend/router/form");

const PORT = process.env.PORT || 5001


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(
  cors()
);

app.use("/api", formRouter);

app.get("/",(req,res) => {
    res.status(200).json({message: "yppp"})
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})