import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Aprender Hooks' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const addTask = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: inputValue
      };
      setTasks([...tasks, newTask]);
      setInputValue('');
    }
  };
  const removeTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };
  return (
    <div className="container">
      <h1>To-Do List</h1>
      <form className="input-group" onSubmit={addTask}>
        <input
          type="text"
          placeholder="Digite uma tarefa..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => removeTask(task.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App