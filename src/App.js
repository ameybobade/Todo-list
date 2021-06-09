
import './App.css';
import Header from "./Components/Header";
import {Todos} from "./Components/Todos";
import {Footer} from "./Components/Footer";
import {AddTodo} from "./Components/AddTodo";
import React, {useState} from 'react';

function App() {

  const onDelete=(todo)=>{
    console.log("I am deleted",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }

  const addTodo=(title,desc)=>{
    let sno = todos[todos.length-1].sno+1;
    const myTodo = {
      sno : sno,
      title : title,
      desc : desc,
    }
    setTodos([...todos,myTodo]);
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Learn React Native",
      desc: "Learn fast!!!!"
    },
    {
      sno: 2,
      title: "Learn Javascript",
      desc: "Already Half Done!"
    },
    {
      sno: 3,
      title: "Exercise",
      desc: "Do it Daily"
    }
  ]);
  return (
    <>
      <Header title="Todo List" searchBar={true}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
