import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { productsState } from "../stores/products/atom";

import { cartState } from "../stores/cart/atom";


function Product() {
  
  const params = useParams();
  const products = useRecoilValue(productsState);
  const product = products.find((p) => p.id === parseInt(params.productId));
  const [cart, setCart] = useRecoilState(cartState);

  useEffect(() => {
    fetch(`https://k4backend.osuka.dev/products/${params.productId}`)
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);

  function handleAddToCart() {
    const newCartItem = {
      id: product.id,
      qty: 1,
    };

    setCart([...cart, newCartItem]);
  }

  return (
    <div>
      
      <img className="show-image" src={product.image} alt={product.title} />
      <div>
      <div className="info">
        <h3 className="title-p">{product.title}</h3>
        <h4 className="rating">Rating {product.rating && product.rating.rate} <i class="fa fa-star"></i></h4>
        <p className="description">{product.description}</p>
        <button className="btn-cart" onClick={handleAddToCart}>Add to cart</button>
      </div>
      </div>
      </div>
  
  );
}

export default Product;