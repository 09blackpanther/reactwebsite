import React,{useState} from 'react';

const Myaccordian=(props)=>{
    const [show,setShow]=useState(false);
    const showitems=()=>{
        setShow(!show);
    };
    return (
        <>
            <div className="ques">
                <button onClick={showitems}>+</button>
                <h2>{props.ques}</h2>
            </div>
            {show && <p>{props.ans}</p>}
           
        </>
    );
 
};
export default Myaccordian;