import React from 'react';
import {NavLink} from 'react-router-dom';
const Home=()=>{
    return (
        <>
        <section id="header" className="d-flex justify-content-center">
        <div className="container-fluid">
         <div className="row">
         <div className="col-10 mx-auto ">
         <div className="row">
           <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column" style={{position:'absolute',top:'180px'}}>
             <h1>Grow your business with <strong className="brand-name" style={{color:'blue'}}>ChennaTechnical</strong></h1>
             <h2 className="my-3">We are the team of talented developer making websites</h2>
             <div className="mt-3">
               <NavLink to="/services" className="btn">Get Started</NavLink>
             </div>
           </div>
           <div className="col-lg-6 order-1 order-lg-2 header-img">
             <img src={require("./36.jpg")} className="img-fluid animated" style={{borderRadius:'80px',position:'absolute',top:'160px',left:'700px',width:'500px'}} alt="home img"/>
           </div>
           </div>
         </div>

         </div>

        </div>

        </section>
            
        </>
    );
};
export default Home;