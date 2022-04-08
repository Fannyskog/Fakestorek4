
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "../stores/cart/atom";
import { productsState } from "../stores/products/atom";

function Cart() {
  
  const products = useRecoilValue(productsState);
  const [cart, setCart] = useRecoilState(cartState);

  function handleRemove(id) {
    setCart(cart.filter((ci) => ci.id !== id));
  }

  function getProduct(ci) {
    const product = products.find((p) => p.id === ci.id);
    const quantity = ci.qty;
 
  
    return (
      <div key={ci.id}>
        <div className="boxis">
        <img className="cart-img" src={product.image}></img>
        <div class="flex">
        <h3 className="cart-title">{product.title}</h3>
        <h2 className="cart-price">{product.price} kr</h2>
        <p className="amount">Amount: {quantity}</p>
        </div>
        <button className="remove-btn" onClick={() => handleRemove(ci.id)}>X</button>
        </div>
      </div>
    );
  } 

  return (
    <div>
      <h1 className="mycart">Your cart</h1>
      {cart.map(getProduct)}
    </div>
  );
}

export default Cart;