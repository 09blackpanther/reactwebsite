import React,{useState} from 'react';
import './index.css';
import Sresult from './Sresult';
const Search=()=>{
    const [img,setImg]=useState();
    const search=(event)=>{
        setImg(event.target.value);
    }
   return (
      <>
        <h1 className="searchtop">Search</h1>
        <div className="searchbar">
            <input type="text" value={img} placeholder="Search Anything" onChange={search}/>
        </div>
        <Sresult name={img}/>
      </>
   );
};
export default Search;