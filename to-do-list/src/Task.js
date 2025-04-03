import './App.css';
//import { useState } from "react"
export default function Task() {


   /* const [inputField, setInput] = useState('');
    function handleChange(e) {
        setInput(e.target.value);
    }
    const [tasks, setTasks] = useState([]);
    function handleClick() {
        if (inputField !== "") {
            setTasks([...tasks, inputField]);
            setInput("");
            console.log([...tasks, inputField]);
        }
    }*/
    return (
        <>
        <div className="section1">
        <h1>My to do list </h1>
        <label htmlFor="input" class="task">Add a task :</label>
        <input type="text" id="input"/>
        <label htmlFor="date">Choose a date:</label>
        <input type="date" id="date"/>
        <label htmlFor="time">Choose a time:</label>
        <input type="time" id="time"/>
        <label htmlFor>Select level of importance & urgency:</label>
        <form>
            <select>
                <option selected>--</option>
                <option>Important & urgent</option>
                <option>Important & not urgent</option>
                <option>Not Important & urgent</option>
            </select>
        </form>
        <button>Add task</button>
        <img src="https://i.pinimg.com/736x/0b/d8/31/0bd831df87dba9efc0967d63f0d13bbd.jpg"
            alt="notebook" width="90" height="90"/>
        <h4>By Lilyan Hatim,  with Love 💕</h4>
        </div>
        <div className="section2">
        <h1 className="header">Tasks: 🌟</h1>
        </div>
        </>
    )
}