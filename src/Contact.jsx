import React,{useState} from 'react';

const Contact=()=>{
   const [forms,setForm]=useState({
    firstname:'',
    lastname:'',
    email:'',
    message:''
   });
   const inputevent=(event)=>{
    const {name,value}=event.target;
    setForm((prev)=>{
        return {
            ...prev,
            [name]:value
        };
    })
   };
   const formsubmit=(e)=>{
    e.preventDefault();
    alert(`my name is ${forms.firstname},my last names is ${forms.lastname} and my email is ${forms.email}`);
   };
    return (
        <>
           <div className="my-5">
            <h1 className="text-center">Contact US</h1>
           </div>
           <div className="container contact_div">
           <div className="row">
            <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formsubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">First Name</label>
    <input type="text" class="form-control" value={forms.firstname} name="fullname" placeholder="Enter Your Name" onChange={inputevent}/>
    </div>
    <div class="form-group">
    <label for="exampleInputEmail1">Last name</label>
    <input type="text" class="form-control" value={forms.lastname} name="lastname" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Last Name" onChange={inputevent}/>
    </div>
    <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" value={forms.email} name="email"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={inputevent}/>
    </div>
  <div class="form-group">
  <label for="exampleInputEmail1">Message</label>
    <textarea type="text" class="form-control" value={forms.message} name="message"  id="exampleInputPassword1" placeholder="Text" onChange={inputevent}/>
  </div>
  
  <button type="submit" class="btn btn-primary" style={{position:'absolute',top:'490px'}} >Submit</button>
</form>

            </div>

           </div>

           </div>
        </>
    );
};
export default Contact;