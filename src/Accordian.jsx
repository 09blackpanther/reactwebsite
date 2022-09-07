import React from 'react';
import './Accordian.css';
import Api from './Api';
import Myaccordian from './Myaccordian';

const Accordian=()=>{
    return (
        <>
            <h1 className="tag">React Interview Questions</h1>
            <div className="acc">
                {Api.map((curele)=>{
                    return (
                        <Myaccordian key={curele.id} ques={curele.question} ans={curele.answer} />
                    );
                })}
            </div>
        </>
    );

};
export default Accordian;
