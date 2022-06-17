import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import { Link, NavLink } from 'react-router-dom';

const Navbar3 = () => {


  return (
    <div>
      



      <div>
        <div className="ne1">
          <select name="" id="">
            <option value="">USA</option>
            <option value="">CHINA</option>
            <option value="">RUSSIA</option>
            <option value="">INDIA</option>
            <option value="">ENGLAND</option>
            <option value="">NEW ZEALAND</option>
            <option value="">PAKISTAN</option>
          </select>
          <a href="">CUSTOMER CARE</a>
          <p>FREE STANDARD SHIPPING ON ORDERS OVER $200</p>
          <div><ion-icon name="pencil-outline"></ion-icon> <Link to="/signup">REGISTER</Link></div>
          <div><ion-icon name="lock-open"></ion-icon><Link to="/signin">LOGIN</Link></div>
        </div>
        <div className="ne2">
          <div className='lk'>
            <Link to= "/women">WOMEN</Link>
            <Link to="/mainmen">MEN</Link>
            <Link to="/kidsmain">KIDS</Link>
          
            <a href="">DESIGN+ART</a>
          </div>
          <div className='Ylogo'>    
 <h1>YOOX</h1>
 </div>
      
          <Link to="/cart">CART</Link>
        </div>
        <div className="ne3">
          <div>
          <Link to="/products" style={{color:"white",textDecoration:"none"}}>NEW ARRIVALS</Link>
            <p>DESIGNERS</p>
            <p>CLOTHING</p>
            <p>SHOES</p>
            <p>ACCESSORIES & BAGS</p>
            <p>8 BY YOOX</p>
            <p>YOOXYGEN</p>
            <p>COLLABORATIONS</p>
            <p>BEST DEALS</p>
            
          </div>
        </div>
      </div>
    
 
       
      </div>

  )
}

export default Navbar3