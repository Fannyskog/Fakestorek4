import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
import { productsState } from "../stores/products/atom";



function Products() {

const products = useRecoilValue(productsState);



  
  return (
  <div> 
    
     <div className="listem">
      {products.map((product) => (
        <div className="box" key={product.id}>
          
          <h4 className="title-pro">{product.title}</h4>
           <Link to={`/Product/${product.id}`}> 
          <img className="img-pro" src={product.image} /></Link>
          
          
          </div>
     
       

      ))}
      </div>
   </div>
  );
}

export default Products;