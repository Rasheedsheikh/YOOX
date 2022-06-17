import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const images = [
    { url: "https://www.yoox.com/images/yoox80/banners/5628_2_Multiform_Main.gif?634485886601286852&impolicy=cropDefault&width=960&height=510" },
    { url: "https://www.yoox.com/images/yoox80/banners/6895_1_Pride_Main_WM.jpg?634485886869569819#width=1380&height=637" },
    { url: "https://www.yoox.com/images/yoox80/banners/5628_2_Multiform_Main.gif?634485886601286852&impolicy=cropDefault&width=960&height=510" },
    { url: "https://www.yoox.com/images/yoox80/banners/6821_1_BeachDays_Main_K.jpg?634485886869569819#width=1380&height=637" },
    { url: "https://www.yoox.com/images/yoox80/banners/5628_2_Multiform_Main.gif?634485886601286852&impolicy=cropDefault&width=960&height=510" },
    { url: "images/6.jpg" },
    { url: "https://www.yoox.com/images/yoox80/banners/5628_2_Multiform_Main.gif?634485886601286852&impolicy=cropDefault&width=960&height=510" },
  ];
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
            <Link to="/products"  style={{textDecoration:"none", color:"white"}} >NEW ARRIVALS</Link>
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
      <div>
    <SimpleImageSlider
      width={"100%"}
      height={504}
      images={images}
      showBullets={true}
      showNavs={true}
    />

    </div>
 
       
      </div>

  )
}

export default Navbar