import { useState } from 'react';
import { tasks } from "./components/Overview.js";



function addTodoToDom() {
  return (
    <ul id="task-list">
      {tasks.map((task) => (<li key={task}>{task}</li>))}
    </ul >
  )
}

function App() {
  const [InputVal, setInputVal] = useState('dummy task');


  const formSubmitted = (e) => {
    e.preventDefault();

  }

  const setTodoVal = (e) => {
    setInputVal(e.target.value)
    tasks.append(InputVal)
  }

  return (
    <div className="App">

      <h1>React Input and list assignment</h1>

      <addTodoToDom />


      <form onSubmit={formSubmitted}>
        <input placeholder='Read a book' onChange={setTodoVal} />
        <button type="submit" id="submit-btn">
          Add new task</button>
      </form>
    </div >
  );



}



// const addTodotoDOM = (input) => {

// }



export default App;
