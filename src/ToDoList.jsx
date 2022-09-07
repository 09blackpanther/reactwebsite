import React from 'react';
import './index.css';

const ToDoList=(props)=>{
    const deleteitem=()=>{

    };
    return (
        <>
        <div className="remove">
        <button onClick={()=>{
            props.onSelect(props.id);
        }}>*</button>
        <li>{props.text}</li>
        </div>
    </>
    );

};
export default ToDoList;