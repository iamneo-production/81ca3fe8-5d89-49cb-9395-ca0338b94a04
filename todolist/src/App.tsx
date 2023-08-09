import { useState } from 'react';
import './App.css';
import TasksList from './TasksList';
import { todo } from './models/todoModel';

function App() {
  const [todoList, setTodoList] = useState<Array<todo>>([
    { id: 1, todoName: 'Task1', isDone: false },
  { id: 2, todoName: 'Task2', isDone: false }]);

  return (
    <div>
      <TasksList todosList={todoList}></TasksList>
    </div>
  );
}

export default App;
