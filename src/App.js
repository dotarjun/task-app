import { useState } from 'react';
import { tasks } from "./components/Overview.js";




function App() {

  const [tasks, setTasks] = useState(["task 1", "task 2"]);
  const [InputVal, setInputVal] = useState('dummy task');

  function TodoList() {
    return (
      <ul id="task-list">
        {tasks.map((task) => (<li key={task}>{task}</li>))}
      </ul >
    )
  }

  const formSubmitted = (e) => {

  }

  function Form() {
    const submitted = (e) => {
      e.preventDefault();
      console.log(e)
      setInputVal(e.target[0].value)
      setTasks((prevTasks) => [...prevTasks, InputVal])
    }

    return (
      <form onSubmit={submitted}>
        <input placeholder='Read a book' />
        <button type="submit" id="submit-btn">
          Add new task</button>
      </form>
    )
  }


  return (
    <div className="App">
      <h1>React Input and list assignment</h1>
      <TodoList />
      <Form />
    </div >
  );
}

export default App;
