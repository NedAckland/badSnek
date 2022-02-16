import React from 'react';
import '../styles/Box.css'

function box({a, head, body, food, foodType}) {
    const foodItems = ['🍇', '🍓', '🍕', '🍚', '🍿','🍇', '🍓', '🍕', '🍚', '🍿' ]
    return (
        <div className={`box ${head === a ? "head" : ""} ${body.includes(a) ? "body" : ""}`}>
         { a === food  ?  <div className='food'>{foodItems[foodType]}</div> : "" }
            {a === head ?
                <div className='head-main'> 
                    <div className='eye'></div> 
                </div> : "" } 
                
        </div>
    );
}

//😀

export default box;