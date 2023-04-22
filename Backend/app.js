const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books

mongoose
  .connect(
    // "mongodb+srv://admin:nUd0zMDtbX35sTL0@cluster0.5yvzr.mongodb.net/bookStore?retryWrites=true&w=majority"
    "mongodb+srv://hemantp2124:patil0607@cluster0.4unmmlt.mongodb.net/bookStore?retryWrites=true&w=majority"
  // `mongodb+srv://admin:${process.env.MONGODB_PASSWORORD}@cluster0.hes3x.mongodb.net/auth?retryWrites=true&w=majority`
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));


  // my database password
  // M7fn91aWyISzQuDc