import React, { useState } from 'react';


import './App.css';
import { render } from '@testing-library/react';
import { renderIntoDocument } from 'react-dom/test-utils';

function App() {
  
  const [todos, setTodos] = useState(["hi","Bye"])
  const [input,setInput] = useState([])
  const addTodo = (event) => {
    event.preventDefault()
     console.log(input)
     setTodos([...todos, input])
     setInput('')
    }
 

  return(
    <form>
    <div className = "App">
      
    <input value={input} onChange={event => setInput(event.target.value)}></input> {/* calling the temp memory input  */}
   
    <button disabled={!input} type= 'submit' onClick={addTodo}>Submit</button>
    <ul>
  {todos.map(todo => <li>{todo}</li>)} {/*todo is basically taking the values from the state one by one, as the map acts as a looping function */}

    </ul>
    </div>
    </form>
  )
  
}

export default App;
