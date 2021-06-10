import React from 'react'

export const Todoitems = ({todo, onDelete}) => {
    let myStyles={
        
    }
    return (
        <>
            <div className="border border-dark rounded rounded-3 p-3" style={myStyles}>
                
                <h5 className="fs-5">{todo.sno+1}. <u>{todo.title}</u></h5>
                <p className="fs-5 mx-4">{todo.desc}</p>
                <button className="btn btn-sm btn-danger mx-4" onClick={() => {onDelete(todo)}} >Delete</button>
                
            </div>
            <hr className="bold"/>
        </>
    )
}
 