const mongoose = require("mongoose");

let schema = new mongoose.Schema(
  {
    id: String,
    completed: Boolean,
    task: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", schema);
