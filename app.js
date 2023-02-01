const express = require("express");
const cors = require("cors");

const app = express();
require("dotenv").config();
const port = 3500;

const router = require("./routes/todo_router");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());
app.use(router);
console.log(process.env.DB_URL);
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });


app.listen(port, console.log("Server listening on port" + port));
