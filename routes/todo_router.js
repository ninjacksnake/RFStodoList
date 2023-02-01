const Router = require("express");
// import controllers here
const todos_controller = require("../controllers/todos_controller");

// methods from controller 
const { add_todo, delete_todo, update_todo, get_todo } = todos_controller;

// use the express router
const router = new Router();

router.post("/api/v1/tasks", add_todo);
router.get("/api/v1/tasks/", get_todo);
router.get("/api/v1/tasks/:id", get_todo);
router.patch("/api/v1/tasks/:id", update_todo);
router.delete("/api/v1/tasks/:id", delete_todo);


module.exports = router;
