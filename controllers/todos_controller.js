const todoModel = require("../models/todoModel");

const todos_controller = {};

todos_controller.add_todo = async (req, res) => {
  try {
    let data = req.body;
    //  console.log(data);
    let result = await todoModel.create(data);
    // console.log(result);
    if (result) {
      res.status(201).send({ message: "Created" });
    }
  } catch (error) {
    console.log(error);
  }
};

todos_controller.delete_todo = async (req, res) => {
  try {
    let id = req.body._id;
    let result = await todoModel.deleteOne({ id: 1 });
    if (result.deletedCount > 0) {
      return res.status(200).send({ message: "deleted" });
    }
  } catch (error) {
    console.log(error);
  }
};

todos_controller.update_todo = async (req, res) => {
  let id = req.params.id;
  try {
    let task = await todoModel.findOne({id: id});
    if (!task) {
        throw new Error('Task not found');
    }
    let result = await todoModel.updateOne({ id: id }, { completed: !task.completed });
    console.log(result);
    if (result.modifiedCount > 0) {
      res.status(200).send({ message: "updated" });
    }
  } catch (error) {
    if(error.message.includes("not found")){
      res.status(404).send({ message: "not found" });
    }
    console.log(error);
  }
};

todos_controller.get_todo = async (req, res) => {
  try {
    let { id } = req.params;
    let result;
    if (id) {
      result = await todoModel.findOne({ id: id });
      console.log(result);
      if (result === null) {
          return res.status(404).json({ message: "This task id does not exist" });
        }
        return res.status(200).json(result);
    }
    result = await todoModel.find({}).sort({createdAt: -1});
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = todos_controller;
