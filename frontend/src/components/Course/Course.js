import React from 'react';
//import Cards from '../../Pages/Cards';
//import itemList from '../../Pages/Data/List';
import Paidbook from '../../Pages/Paidbook';
import axios from "axios";
import  { useState,useEffect } from 'react';
const Course = () => {
 // console.log(itemList); // Confirm that all 10 books are being logged.

 const[book,setBook]=useState([])
 useEffect(()=>{
   const getBook=async()=>{
     try{
     const res = await axios.post("http://localhost:8000/api/bookData");
     console.log(res.data)
     const filteredBooks = res.data.filter((data) => data.category === "Paid");
                setBook(filteredBooks);
                console.log("Updated book state:", filteredBooks); // Log the filtered books
            } catch (error) {
                console.log(error);
            }
      
   }
   getBook();
 },[])

  return (
    <>
      <div className="container">
        <div className="text-center mt-5">
          <h1>
            <b>
              We're delighted to have you 
              <span id="el"> Here :)</span>
            </b>
          </h1>
          <div className="para">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <a href="/">
            <button className="btn btn-dark mb-1 mt-3">Back</button>
          </a>
        </div>

        {/* Pass All Books to paidbook*/}
        
   <Paidbook items={book} />
    
     
      </div>
    </>
  );
};

export default Course;
