import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.ecom.cart);
  return (
    <>
      <div>
      <i class="fa-solid fa-cart-shopping fa-2x"></i> <span style={{ fontSize: "20px" }}>{cart.length}</span>
      </div>
     
    </>
  );
}

export default Cart;
