import React from 'react';
import './index.css';
const Sresult=(props)=>{
   const img=`https://source.unsplash.com/400x300/?${props.name}`;
   return (
    <>
        <img src={img} alt="search" className="img"/>
    </>
   );
};
export default Sresult;
