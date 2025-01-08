import React from 'react'
import './Signup.css'
import Login from '../Login/Login'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Signup = () => {
const navigate=useNavigate(); 
  const[credentials,setCredentials]=useState({
    name:"",
    email:"",
    password:"",

  });
  const handlesubmit=async(e)=>{
e.preventDefault();

try{
  const response= await fetch("http://localhost:8000/api/SignUp",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({
      name:credentials.name,
      email:credentials.email,
      password:credentials.password,

    }),
  });
  const json=await response.json();
  console.log(json)
  if (json.success) {
    alert("User created successfully!");
   navigate("/");
  
  } 
    else {
    alert("Email already in use.");
  }
} catch (error) {
  console.error("Error during sign up:", error);
  alert("An error occurred. Please try again later.");
}
  };

const onChange=(event)=>{
  setCredentials({...credentials,[event.target.name]:event.target.value});
}




  return (
    <>
 <div className="signup  ">
      <div className="modal-dialogs  ">
        <div className="modal-contents">
          <div className="modal-header">
            <h5 className="modal-title "><b className='text-center'>Signup</b></h5>
           {/*<button
              type="button "
              className="btn-close"
              onClick={() => document.getElementById("exampleModal").close()}
              aria-label="Close"
            ></button>*/}
            <a href="/"><button
              type="button "
              className="btn-close" aria-label="Close"
              ></button></a>
          </div>
          <div className="modal-body">
           
{/* Email Field */}
<div className="mb-3 mt-4 ">

<label htmlFor="inputEmail" className="col-sm-2 col-form-label">
          Name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            
            name="name"
            value={credentials.name}
            onChange={onChange}
            placeholder='enter full name'
            
          />
        </div>

        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="email"
            className="form-control"
          
            name="email"
            value={credentials.email}
            onChange={onChange}
            placeholder='enter email'
            
          />
        </div>
      </div>

      {/* Password Field */}
      <div className="mb-3 ">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10 ">
          <input
            type="password"
            className="form-control "
            

            name="password"
            value={credentials.password}

            onChange={onChange}
            placeholder='enter password'
          />
             {credentials.password.length > 0 && credentials.password.length < 4 && (
        <p style={{ color: "red" }}>Password must be greater than 4 digits</p>
      )}
        </div>
      </div>




          </div>
          <div className="modal-footer mt-5 mb-3">
           
            <button type="button" className="btn btn-dark btn4 " onClick={handlesubmit}>
              Signup
            </button>
            
            <p className='ac'>Have Account ?
                {/* Render Login Modal if showLoginModal is true */}
           
            <p className='l'
            onClick={()=>
                document.getElementById("exampleModal").showModal()
            }>
              Login
            </p>

           
       <Login />
          
            </p>

          
              {/* <Link to="/Signup">Sign Up</Link></p>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => document.getElementById("exampleModal").close()}
            >
              Close
            </button>*/}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup