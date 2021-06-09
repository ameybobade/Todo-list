import React from 'react'
import {Todoitems} from "./Todoitems";

export const Todos = (props) => {
    let myStyles={
        minHeight:"70vh",
    }
    return (
        <div className="container my-3" style={myStyles}>
            <h3 className="text-center">Todo List</h3>
            {props.todos.length===0? "No todos to display":
            props.todos.map((todo)=>{
                return (
                    <>
                        <Todoitems todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                        <hr/>
                    </>
                )
            })}
            
        </div>
    )
}
