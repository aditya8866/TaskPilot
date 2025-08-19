import React, { useState } from "react";


const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDes] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [assignTo, setAssignTo] = useState("");
    const [category, setCategory] = useState("");

    const resetForm = () => {
        setTaskTitle("");
        setTaskDes("");
        setTaskDate("");
        setAssignTo("");
        setCategory("");
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const newTask = {
            taskTitle,
            taskDate,
            assignTo,
            taskDescription,
            category,
            active: true,
            newTask: true,
            completed: false,
        };

        const employees = JSON.parse(localStorage.getItem("employees"));
        employees.forEach((elem) => {
            if (assignTo === elem.firstName) {
                elem.tasks = elem.tasks;
                elem.taskCount.newTask=(Number(elem.taskCount.newTask))+1
                elem.tasks.push(newTask);   
            }
        });
        // let newtask_num=(Number(employees.taskCount.newTask) )+1

        
        localStorage.setItem("employees", JSON.stringify(employees));
        resetForm();
    };

    const isFormValid = taskTitle && taskDate && assignTo && taskDescription && category;

    return (
        <div className="bg-[#1c1c1c] mx-14 flex justify-center rounded-lg pb-2">
            <form
                onSubmit={submitHandler}
                className="flex text-white justify-between w-[75%] text-xl font-normal relative"
            >
                <div className="mt-5">
                    <h2>Task Title</h2>
                    <input
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                        className="mb-3 mt-1 bg-transparent border-2 w-[400px] h-[40px] p-3 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        type="text"
                        placeholder="Make a UI design"
                    />
                    <h2>Date</h2>
                    <input
                        value={taskDate}
                        onChange={(e) => setTaskDate(e.target.value)}
                        className="mb-3 mt-1 bg-transparent border-2 w-[400px] h-[40px] p-3 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        type="date"
                    />
                    <h2>Assign to</h2>
                    <input
                        value={assignTo}
                        onChange={(e) => setAssignTo(e.target.value)}
                        className="mb-3 mt-1 bg-transparent border-2 w-[400px] h-[40px] p-3 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        type="text"
                        placeholder="Employee name"
                    />
                    <h2>Category</h2>
                    <input
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="mb-3 mt-1 bg-transparent border-2 w-[400px] h-[40px] p-3 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        type="text"
                        placeholder="Design, Dev, etc."
                    />
                </div>
                <div className="mt-5 relative">
                    <h2>Description</h2>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => setTaskDes(e.target.value)}
                        className="mb-3 mt-1 bg-transparent border-2 w-[400px] h-[223px] p-3 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    ></textarea>
                    <br />
                    <button
                        disabled={!isFormValid}
                        className={`px-8 py-3 w-full rounded-lg ${
                            isFormValid ? "bg-emerald-400" : "bg-gray-400 cursor-not-allowed"
                        }`}
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;
