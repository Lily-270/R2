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
        <h1 className="header">My to do list </h1>
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
        <h4>By Lilyan Hatim,  with Love 💕</h4>
        </div>
        <div className="section2">
        <h1>Tasks: 🌟</h1>
        </div>
        </>
    )
}