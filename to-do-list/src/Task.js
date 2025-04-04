import './App.css';
import { useState } from "react"
export default function Task() {
    var [input, setInput] = useState("");
    function handleChange(e) {
        setInput(e.target.value);
    }

    var [time, setTime] = useState();
    function handleTime(e) {
        setTime(e.target.value);
    }

    var [date, setDate] = useState();
    function handleDate(e) {
        setDate(e.target.value);
    }

    var[styling , setStyling]=useState( {backgroundColor: "#ffffff"})
    function handleSelection(e) {
        var value=e.target.value;
        if (value == "option1") {
             setStyling ({
                backgroundColor: "#cd5e6d",
                color:"#ffffff"
            })
        }
        else if (value == "option2") {
            setStyling ( {
                backgroundColor: "#edd386"
            })
        }
        else {
            setStyling ( {
                backgroundColor: "#ffffff"
            })
        }

    }

    var [tasks, setTasks] = useState([]);
    function handleClick() {
        var newTask = (
            <div className="card" style={styling}>
                <div className="card-body">
                    <h5 className="card-title">{input}</h5>
                    <p className="card-text">Date: {date}</p>
                    <p className="card-text">Time: {time}</p>
                    <a href="index.html" className="btn btn-primary">Done!</a>
                </div>
            </div>
        )
        setTasks([...tasks, newTask]);
        setInput("");
        setDate("");
        setTime("");
    }
 const isButtonDisabled= !input || !date || !time;
    return (
        <>
            <div className="section1">
                <h1>My to do list </h1>
                <label htmlFor="inputId" className="task">Add a task :</label>
                <input type="text" id="inputId" value={input} onChange={handleChange} required />
                <label htmlFor="date">Choose a date:</label>
                <input type="date" id="date" value={date} onChange={handleDate} required />
                <label htmlFor="time">Choose a time:</label>
                <input type="time" id="time" value={time} onChange={handleTime} required />
                <label htmlFor>Select level of importance & urgency:</label>
                <form>
                    <select id="select" required onChange={handleSelection}>
                        <option defaultValue>--</option>
                        <option className="option1" value="option1">Important & urgent</option>
                        <option className="option2" value="option2">Important & not urgent</option>
                        <option className="option3" value="option3">Not Important & urgent</option>
                    </select>
                </form>
                <button onClick={(e) => handleClick(e)}  disabled={isButtonDisabled}>Add task</button>
                <img src="https://i.pinimg.com/736x/0b/d8/31/0bd831df87dba9efc0967d63f0d13bbd.jpg"
                    alt="notebook" width="90" height="90" />
                                    <h4>By Lilyan Hatim,  with Love 💕</h4>
            </div>
            <div className="section2">
                <h1 className="header">Tasks: 🌟</h1>
                <div>
                    {tasks.map((task, index) => (
                        <div key={index}> {task}</div>
                    ))}
                </div>
            </div>
        </>
    )
}