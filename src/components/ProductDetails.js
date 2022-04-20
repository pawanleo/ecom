import React from "react";
import { useLocation } from "react-router-dom";
import "../css/ProductDetails.css";

import { addToCart } from "../reducers";
import { useDispatch } from "react-redux";
const ProductDetails = () => {

  const { state } = useLocation();
  
  const dispatch = useDispatch();
  const addToCart2 = (product) => {
    console.log(product);
    /// Action dispatch add to cart
    dispatch(addToCart(product));
  };
  return (
    <div className="flex-container">
      <div className="flex-box-1">
        <img
          src={state.image}
          alt="Italian Trulli"
          width="450px"
          height="540px"
        />
      </div>
      <div className="flex-box-2">
        <h1>{state.title}</h1>
        <span className="price">${state.price}</span>
        <h2 className="productdetails">Product Details</h2>
        <p className="desc">{state.description}</p>
        <div className="buttons">
          {" "}
        
          <button
            className="addToCart"
            onClick={() => addToCart2(state)}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
