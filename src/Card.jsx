import React from 'react';
import ReactDOM from 'react-dom';
function Card(props){
    return (
        <>
            <div className="card">
               <img src={props.imgs} className="card_img"/>
               <div className="card_info">
                <span>{props.title}</span>
                <h4>{props.name}</h4>
                <a href={props.links}><button>WATCH NOW</button></a>
               </div>
            </div>
        </>
    );

}
export default Card;