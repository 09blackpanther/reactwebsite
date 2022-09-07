import React from 'react';
import Cards from './Cards';
import Ser from './Ser';
const Services=()=>{
    return (
        <>
            <div className="my-5">
            <h1 className="text-center">
                Our Services
            </h1>
            </div>
            <div className="container-fluid mb-5">
             <div className="row">
              <div className="col-10 mx-auto ">
              <div className="row gy-4">
              {
                Ser.map((value,index)=>{
                    return <Cards
                      id={index}
                      key={index}
                      imgsrc={value.img}
                      title={value.title}
                    />
                })
              }
              </div>
              </div>
              </div>
              </div>
        </>
    );
};
export default Services;