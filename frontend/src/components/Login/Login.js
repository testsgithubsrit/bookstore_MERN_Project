import React from 'react';
//import Course from '../Course/Course';
import { Link } from 'react-router-dom';
import "./Login.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
const navigate=useNavigate();
  const [credentials, setCredentials] = useState({
  
    email: "",
    password: "",
  
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          
          email: credentials.email,
          password: credentials.password,
         
        }),
      });

      const json = await response.json();
      console.log(json);

      if (json.success) {
        alert("Thanks for logging in!");
      
      // Close the modal after successful login
      document.getElementById("exampleModal").close();  // Close the modal

      // Navigate to the Course page
      navigate("/Course");

        localStorage.setItem("userEmail", credentials.email);
        
        localStorage.setItem("authToken",json.authToken);
        console.log(localStorage.getItem("authToken"))
        
        

        
      } else {
        alert("Please enter valid credentials.");
      }
    } catch (error) {
      console.error("Error during sign up:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  

  return (
    <dialog id="exampleModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title"><b>Login</b></h5>
            <button
              type="button "
              className="btn-close"
              onClick={() => document.getElementById("exampleModal").close()}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
           
{/* Email Field */}
<div className="mb-3 mt-4 ">
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
        </div>
      </div>




          </div>
          <div className="modal-footer mt-4 mb-4">
           
            <button type="button" className="btn btn-dark  btn4 " onClick={handleSubmit}>
              Login
            </button>
            <p>
              Not registered? <Link to="/signup">Signup</Link>
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
    </dialog>
  );
};

export default Login;
