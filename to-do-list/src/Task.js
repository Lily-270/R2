import './App.css';
import { useState } from "react"
import { Field, FieldRoot, Input, Button, VStack } from "@chakra-ui/react"
export default function Task() {
    const [tasks, setTasks] = useState([]);

    const [inputField, setInput] = useState("");
    function handleChange(e) {
        setInput(e.target.value);
    }


    function addTask() {
        if (inputField.trim() !== "") {
            setTasks([...tasks, inputField]);
            setInput("");
        }
        return(
            <ul>
            {tasks.map((x, index) => (
                <li key={index}>{x}</li>
            ))}
        </ul>
        )

    };

    return (
        <div className="Task">
            <VStack>
                <FieldRoot orientation="vertical">
                    <Field.Label fontSize="lg" >Type a task!</Field.Label>
                    <Input placeholder="task" flex="2" size="lg" value={inputField} onChange={handleChange} />
                </FieldRoot>
                <Button size="md" onClick={addTask}>Add task!</Button>
            </VStack>
        </div>
    )
}