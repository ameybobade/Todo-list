
import React, {useState} from 'react';

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    
    
    const submit = (e) => {
        e.preventDefault();
        if (!title) {
            alert("Title cannot be blank");
        }
        else if (!desc)
        {
            alert("Description cannot be blank");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container my-3">
            <h3>Add Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="desc">Todo Description</label>
                    <input type="text"
                    value={desc} value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" placeholder="Description"/>
                </div>
                
                <button type="submit" className="btn btn-success btn-sm">Submit</button>
            </form>
        </div>
    )
}
