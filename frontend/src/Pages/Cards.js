import React, { useState } from 'react';
import './Css/Cards.css';
//import itemList from './Data/List'; // Importing the itemList

const Cards = ({items=[]}) => {
    const [visibleCards, setVisibleCards] = useState(3); // Show 3 cards by default
    const [showAll, setShowAll] = useState(false); // Track if "View More" is clicked

    const buy = () => {
        alert('Thanks for buying');
    };

    const free = () => {
        alert('This is absolutely free');
    };

    // Toggle between limited and full card disp
    const toggleViewMore = () => {
        setShowAll(!showAll);
        // Set visible cards to show all if 'View More' is clicked, otherwise reset to 3
        if (!showAll) {
            setVisibleCards(items.length); // Show all cards
        } else {
            setVisibleCards(3); // Reset to show only 3 cards
        }
    };
    

    return (
        <>
            {/* Cards display with View More */}
            <div className="row">
                {items.slice(0, visibleCards).map((item) => (  // Use the correct visibleCards value
                    <div className="col-md-4 col-12 mb-3 mt-4 my-4" key={item.id}>
                        <div className="card" style={{ width: '100%' }}>
                            <img src={item.image} className="img-fluid card-img-top " alt={item.name} />
                            <div className="card-body dark">
                                <button className='tebtn' onClick={free}>{item.category}</button>
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.title}</p>
                                <div className='buy'>
                                    <button className='price'>${item.price}</button>
                                    <button 
                                        className="btn btn-outline-secondary" 
                                        style={{ transition: 'all 0.2s ease-in-out' }} 
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = '#ec4899'; // Pink color
                                            e.target.style.color = '#ffffff'; // White text
                                        }} 
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = 'transparent';
                                            e.target.style.color = ''; // Reset to default color
                                        }} 
                                        onClick={buy}
                                    >
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View More button */}
            <div className="text-center mt-3 mb-4">
                <button onClick={toggleViewMore} className="btn btn-secondary">
                    {showAll ? 'Show Less' : 'Show All'}
                </button>
            </div>
        </>
    );
};

export default Cards;
