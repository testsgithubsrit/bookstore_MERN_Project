import React, { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Login from "../Login/Login";
//import { useNavigate } from "react-router-dom";
function Navbar() {
  const[search,setSearch]=useState("")
 const navigate=useNavigate()
const [theme,setTheme]=useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light")
const element=document.documentElement;
useEffect(()=>{
  
    

  if(theme==="dark"){
  element.classList.add("dark");
  localStorage.setItem("theme","dark")
  document.body.classList.add("dark");
  }
  else{
    element.classList.remove("dark")
    localStorage.setItem("theme","light")
    document.body.classList.remove("dark"); 
  }
},[theme])


 // Handle logout
 const handleLogout = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("userEmail");
 // setIsLoggedIn(false); // Update login state
  toast.success("You have successfully logged out.");
  navigate("/")
};


  /*const [darkMode, setDarkMode] = useState(false); // Track the current mode
  const toggleMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode'); // Add/remove class to body
  };*/
  const [stricky, setStricky] = useState(false); // useState में प्रारंभिक मान

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setStricky(true);
      } else {
        setStricky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <nav
    className={` navbar navbar-expand-lg navbar-light bg-light py-4 fixed-top  ${
      stricky
        ? "stricky-navbar"
        : ""
    }`}
  >
  
    
      <div className="container-flui container">
        <Link className="navbar-brand " to="/">
          <b>Bookstore</b>
        </Link>
        <button
          className="navbar-toggler me-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
       
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 me-5  gap-3">
            <li className="nav-item custom-hover-effect">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            </ul>
            {localStorage.getItem("authToken") && (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5 gap-3">
            <li className="nav-item custom-hover-effect">
              <Link className="nav-link active" to="/Course">
                Course
              </Link>
            </li>
            <li className="nav-item custom-hover-effect">
              <Link className="nav-link active" to="/Contact">
                Contact
              </Link>
            </li>
            <li className="nav-item custom-hover-effect">
              <Link className="nav-link active" to="/About">
                About
              </Link>
            </li>
          </ul>
        )}

          <form className="d-flex">
            <div className="input-group me-3">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
            </div>
          </form>
          </div>
          <div className='ms-auto mode' style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
           {/* Dark/Light Mode Toggle Button */}
        <button
          className="btn btn-outline-secondary btn3"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
         
        >
          <FontAwesomeIcon
            icon={theme==="dark" ? faSun : faMoon}
            style={{ marginRight: '5px' }}
          />
          
        </button>

        {!localStorage.getItem("authToken") ? (
            
          <div className="">
              {/* Conditionally render Login or Logout button */}
            
          <button type="button" className="btn btn-dark ms-auto   btn2" 
          onClick={()=>
            document.getElementById("exampleModal").showModal()
          }>
            Login
          </button>
          <Login/>
          </div>):(
             <button
             type="button"
             className="btn btn-danger ms-auto btn2"
             onClick={handleLogout}
           >
             Logout
             
           </button>
          

          )}
          </div>
      </div>
      
    </nav>
  );
}

export default Navbar;
