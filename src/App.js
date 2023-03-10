import { useState } from 'react';
import TodoList from "./components/TodoList";
import Form from "./components/Form";

function App() {

  const [tasks, setTasks] = useState(["task 1", "task 2"]);

  const submitted = (e) => {
    e.preventDefault();
    const newTask = e.target[0].value
    e.target[0].value = ''
    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  return (
    <div className="App">
      <h1>React Input and list assignment</h1>
      <TodoList tasks={tasks} />
      <Form onSubmit={submitted} />
    </div >
  );
}

export default App;
