import React, { useState,useEffect } from 'react';
import Cards from '../../Pages/Cards';
import axios from "axios";
import './Home.css';

const Home = () => {
  /*const [visibleCards, setVisibleCards] = useState(3); // Show 3 cards by default on large screens
  const [showAll, setShowAll] = useState(false); // Track if "View More" is clicked

  const buy = () => {
    alert('Thanks for buying');
  };
  
  const free = () => {
    alert('This is absolutely free');
  };

  const cardData = [
    { title: 'Book 1', text: 'Some text about book 1', imgSrc: 'book3.jpg' },
    { title: 'Book 2', text: 'Some text about book 2', imgSrc: 'book3.jpg' },
    { title: 'Book 3', text: 'Some text about book 3', imgSrc: 'book3.jpg' },
    { title: 'Book 4', text: 'Some text about book 4', imgSrc: 'book3.jpg' },
    { title: 'Book 5', text: 'Some text about book 5', imgSrc: 'book3.jpg' },
    { title: 'Book 6', text: 'Some text about book 6', imgSrc: 'book3.jpg' },
  ];

  // Toggle between limited and full card display
  const toggleViewMore = () => {
    setShowAll(!showAll);
    setVisibleCards(showAll ? 3 : cardData.length);
  };*/

  const[book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try{
      const res = await axios.post("http://localhost:8000/api/bookData");
      console.log(res.data)
      setBook(res.data.filter((data)=>data.category==="free"))
      }catch(error){
console.log(error)
      }
    }
    getBook();
  },[])

  return (
    
    <>
    
      <div className="container-fluid main_header">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
            <div className="row">
              {/* Left side div */}
              <div className="  col-md-6 col-12 main_header_left order-2 order-md-1">
                <h1>
                  <b>
                    Hello, welcome here to learn<br />
                    something <span id="el">new every day!!!</span>
                  </b>
                </h1>
                <div className='para'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                  </p>
                </div>

                <div className="input-group email">
                  <span className="input-group-text">
                    <i className="bi bi-envelope"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email here for login"
                    aria-label="Email"
                  />
                </div>

                <div className='btns'>
                  <button className='btn btn-dark btn1'>Secondary</button>
                </div>
              </div>

              {/* Right side div */}
              <div className="col-md-6 col-12 main_header_right order-1 order-md-2">
                <div className="carousel-item active">
                  <img src="book.png" className="d-block w-100 book" alt="A book" />
                </div>
              </div>
            </div>

            {/* Free Offered Courses */}
            <div className='cu'>
              <h4><b>Free Offered Courses</b></h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </p>

            </div>
            

            {/* Cards display with View More */}
            <div className='container'>
        
   <Cards items={book} />
              
         
            </div>
            {/* <div className="row">
              {cardData.slice(0, visibleCards).map((card, index) => (
                <div className="col-md-4 col-12 mb-3" key={index}>

                  <div className="card" style={{ width: '100%' }}>
                    
                    <img src={card.imgSrc} className="img-fluid card-img-top" alt={card.title} />
              
                    <div className="card-body">
                      <button className='tebtn' onClick={free}>Free</button>
                      <h5 className="card-title">{card.title}</h5>
                      <p className="card-text">{card.text}</p>
                      <div className='buy'>
                        <button className='price'>$0</button>
                        <button className='buys' onClick={buy}>Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>*/}

            {/* View More button */}
            {/* <div className="text-center mt-3 mb-4">
              <button onClick={toggleViewMore} className="btn btn-secondary">
                {showAll ? 'Show Less' : 'View More'}
              </button>
            </div>*/}
          </div>
        
        </div>
      </div>
     
    </>
  );
};

export default Home;
