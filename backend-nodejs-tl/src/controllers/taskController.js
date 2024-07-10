const Task = require("../models/task");

const createTask = async (req, res) => {
    try {
        const { title, description, status } = req.body;

        const newTask = new Task({
            title,
            description,
            status
        });

        const task = await newTask.save();
        res.status(200).json(
            {
                status: "Success",
                response: "Task created successfully",
                task: task
            }
        );
    } catch (error) {
        console.log("error", error);
        res.status(500).json({
            status: "Failed",
            response: "Internal Issue",
            error: error.message
        })
    }
};


const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json(
            {
                status: "Success",
                response: "Task List Getting Successfully",
                tasks: tasks
            }
        );
    } catch (error) {
        console.log("error", error);
        res.status(500).json({
            status: "Failed",
            response: "Internal Issue",
            error: error.message
        })
    }
};

const updateTask = async (req, res) =>{
    try {
        const id = req.params.id;

        const {title, description, status} = req.body;
        const task = await Task.findByIdAndUpdate(id, {
            title,
            description,
            status,
        });

        res.status(200).json(
            {
                status: "Success",
                response: "Task updated successfully",
                task: task
            }
        );
    } catch (error) {
        res.status(500).json({
            status: "failed",
            data: "Internal Issue"
        })
    }
};

const deleteTask = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteTask = await Task.findByIdAndDelete(id);

        if (!deleteTask) {
            return res.status(404).json({
                status: "Not Found",
                response: "Task Not Found"
            });
        }

        res.status(200).json({
            status: "Success",
            response: "Task Deleted Correctly"
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            status: "Failed",
            response: "Internal Issue",
            error: error.message
        })
    }
};

module.exports = {
    createTask,
    getAllTasks,
    updateTask,
    deleteTask,
}