import React from 'react';

const SingleProduct = ({ image, title, price, off }) => {
    return (
        <div className='fur_card'>
            <img src={image} alt="" />
            <div className='extras'>
                <h4>{title}</h4>
                <h5>₹ {price}/-</h5>
                <p>{off}% Off</p>
            </div>
        </div>
    )
}

export default SingleProduct;