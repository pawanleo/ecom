import React from "react";
import "../css/cartproducts.css";
import { useSelector } from "react-redux";

function CartProducts() {
  const cart = useSelector((state) => state.ecom.cart);

  return (
    <div className="cart">
      <h1 className="cart-header">My Cart</h1>
    
        {cart.map((ele) => (
          <li className="list">
            <div className="cart-list">
              <img
                src={ele.image}
                width="80px"
                height="80px"
                alt="product-img"
              />
              <div className="cart-details">
                <h4>{ele.title}</h4>

                <span>$ {ele.price}</span>
              </div>
            </div>
          </li>
        ))}
   

      <div className="order-btn">
        <button className="placeorder">PLACE ORDER</button>
      </div>
    </div>
  );
}

export default CartProducts;
