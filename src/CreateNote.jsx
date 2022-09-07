import React,{useState} from 'react';
import './index.css';
function CreateNote(props){
    const [note,setNote]=useState({
        title:'',
        content:'',
    });
    const inputevent=(event)=>{
        const value=event.target.value;
        const name=event.target.name;
        setNote((oldva)=>{
            return{
                ...oldva,
                [name]:value,
            };

        });

    };
    const addevent=()=>{
         props.passnote(note);
    };

  return (
    <>
        <div className="note">
          <form>
            <input type="text" name="title" value={note.title} onChange={inputevent} placeholder="Title" autoComplete="off"/>
            <textarea rows="" column="" name="content" value={note.content} onChange={inputevent} placeholder="Write a note" autoComplete="off"></textarea>
            <button onClick={addevent}>+</button>
          </form>
        </div>
    </>
  );
};
export default CreateNote;