import './App.css';
import { useState } from "react"
import { Field, FieldRoot, Input, Button, VStack, List } from "@chakra-ui/react"
export default function Task() {


    const [inputField, setInput] = useState('');
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
    }
    return (
        <div className="Task">
            <VStack>
                <FieldRoot orientation="vertical">
                    <Field.Label fontSize="lg" >Type a task!</Field.Label>
                    <Input placeholder="task" flex="3" size="lg" value={inputField} onChange={handleChange} />
                </FieldRoot>
                <Button size="md" onClick={handleClick}>Add task!</Button>
                <List.Root>
                    {tasks.map(function (item, index) {
                        return (
                            <List.Item key={index} _marker={{ color: "lightPink" }}>{item}</List.Item>
                        )
                    })}
                </List.Root>
            </VStack>
        </div>
    )
}