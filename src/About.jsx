import React from 'react';
import {NavLink} from 'react-router-dom';
const About=()=>{
    return (
        <>
             <section id="header" className="d-flex justify-content-center">
        <div className="container-fluid nav_bag">
         <div className="row">
         <div className="col-10 mx-auto ">
         <div className="row">
           <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column" style={{position:'absolute',top:'180px'}}>
             <h1>Welcome to About page <strong className="brand-name" style={{color:'blue'}}>ChennaTechnical</strong></h1>
             <h2 className="my-3">We are the team of talented developer making websites</h2>
             <div className="mt-3">
               <NavLink to="/contact" className="btn">Contact Now</NavLink>
             </div>
           </div>
           <div className="col-lg-6 order-1 order-lg-2 header-img">
             <img src={require("./37.jpg")} className="img-fluid animated" style={{borderRadius:'80px',position:'absolute',top:'160px',left:'700px',width:'500px'}} alt="home img"/>
           </div>
           </div>
         </div>

         </div>

        </div>

        </section>
        </>
    );
};
export default About;