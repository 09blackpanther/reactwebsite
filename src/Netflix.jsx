import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card'; 
import './index.css';
import App from './App';

function Netflix(){
    return(
    <>
    <h1 className="heading_style">The Netflix Originals 💯</h1>
    {App.map((val)=>{
     return(
      <Card
      key={val.id}
      title={val.title}
      imgs={val.imgs}
      name={val.name}
      links={val.links}
      />
    );
  })}
  </>)}
export default Netflix;