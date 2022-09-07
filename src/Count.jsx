import React,{useState}from 'react';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
function Count(){
    const [additem,setAddItem]=useState([]);
    const addnote=(note)=>{
        setAddItem((prevdate)=>{
            return [...prevdate,note];
        });
    };
    return (
        <>
            <Header/>
            <CreateNote passnote={addnote}/>
            {
                additem.map((val,index)=>{
                    return <Note
                        id={index}
                        key={index}
                        title={val.title}
                        content={val.content}
                    />
                })
            }
            <Footer/>
        </>
    );

};
export default Count;