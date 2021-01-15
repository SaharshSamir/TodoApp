import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './styling/app.css';

function App() {
  return (
    <div className="container mt-5"  >
      <AddTodo />
      <TodoList />
      
    </div>
  );
}

export default App;
