import React from "react";
import { Link } from "react-router-dom";

//https://www.refinery29.com/images/10402904.jpg?format=pjpg&auto=webp&resize-filter=lanczos2&quality=50&sharpen=a3%2Cr3%2Ct0&optimize=low&width=960&crop=5%3A6
//<img className="bg" src="https://room.technoluxpro.com/wp-content/uploads/2018/07/wardrobe-5-sq.m.-design-41.jpg" alt="image"></img>
//src="https://media.glamour.com/photos/5d3f602ea465f80009e5f32f/2:1/w_3964,h_1982,c_limit/1472%20TDN%2035B%20URBN%20NUULY%20CAMPAIGN_FRUIT%20STORY_SELECT_0002.jpg"
function Home() {
  return (
    <div>
     
     <Link to="/Products"><div className="btn">Sale 70% off!</div></Link>
    </div>
  );
}
   
 

export default Home;