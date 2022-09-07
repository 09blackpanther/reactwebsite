import React from 'react';
import './index.css';
function Note(props){
    return (
        <>
            <div className='note_div'>
            <h2>{props.title}</h2>
             <p>{props.content}</p>
             <button>*</button>
             
            
            </div>
        </>
    );
};
export default Note;