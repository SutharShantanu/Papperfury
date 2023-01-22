import React from 'react';
import { Link as ReactLink } from "react-router-dom";

const SingleProduct = ({ image, title, price, off, id }) => {
    return (
        <ReactLink to={`/product/${id}`}>
            <div className='fur_card'>
                <img src={image} alt="" />
                <div className='extras'>
                    <h4>{title}</h4>
                    <h5>₹ {price}/-</h5>
                    <p>{off}% Off</p>
                </div>
            </div>
        </ReactLink>
    )
}

export default SingleProduct;