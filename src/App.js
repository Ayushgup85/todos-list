import './App.css';
import Header from './components/header';
// import TodoItem from './components/TodoItem';
import Todos from './components/Todos';
import Footer from './components/Footer';
import React ,{useState} from 'react';
import AddTodo from './components/AddTodo';
function App() {
 const onDelete=(todo)=>
  {
console.log("I am onDelete of todo",todo);
setTodos(todos.filter((e)=>
{
  return e!==todo;
}
))
  }
  const [todos,setTodos]=useState([
    {
      sno:1,
      title:"Go to the market",
      desc:"You need to go the market "
    },
    {
      sno:2,
      title:"Go to the mall",
      desc:"You need to go the mall "
    },
    {
      sno:3,
      title:"Go to the ghat",
      desc:"You need to go the ghat "
    }
  ]);
  return (
    <>
    <Header title="MyTodosList"/>
    <AddTodo AddTodo={addTodo}/>  
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
 