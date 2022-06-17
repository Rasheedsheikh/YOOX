import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Navbar3 from '../Components/Navbar3'
import Navbar4 from '../Components/Navbar4'

const KidsMain = () => {
  return (
    <>
    <Navbar4/>
    {/* <div>
      <img style={{ width:"80%"}} src="https://www.yoox.com/images/yoox80/banners/6821_1_BeachDays_Main_K.jpg?634485886869569819#width=1380&height=637"/>
    </div> */}

<div>
        <div className="bom">



</div>
<div className="bom2">
<div className="in-pic2type">
  <p className="head">NEW ARRIVALS</p>
  <Link to="/kids">VIEW ALL</Link>
</div>
<div className="in-pic2">
  <div>
    <img  src="https://www.yoox.com/images/items/47/47307190BU_14_f.jpg?impolicy=crop&width=306&height=390" alt=""/>
      <h4>BANANA MOON</h4>
      <p>Sweetshirt</p>
      <p>$49.00</p>
  </div>
  <div>
    <img  src="https://www.yoox.com/images/items/17/17276201JP_14_f.jpg?impolicy=crop&width=306&height=390" alt=""/>
      <h4>DOLCE & GABBANA</h4>
      <p>Casual pants</p>
      <p>$879.00</p>
  </div>
  <div>
    <img  src="https://www.yoox.com/images/items/47/47307181QT_14_f.jpg?impolicy=crop&width=306&height=390" alt=""/>
      <h4>FENDI</h4>
      <p>Cross-Body Bag</p>
      <p>$55.00</p>
  </div>
</div>

</div>
<div className="bom3">
<div className="img1">
  <img  src="https://www.yoox.com/images/items/12/12826937KT_14_f.jpg?impolicy=crop&width=306&height=390" alt=""/>
    <h1>MARCO BURLON</h1>
    <p>Pure Creativity</p>
</div>
<div>
  <img  src="https://www.yoox.com/images/items/49/49767439XT_14_f.jpg?impolicy=crop&width=306&height=390" alt=""/>
    <h1>NIKE</h1>
    <p>Two accessories created exclusivily for YOOX</p>
</div>
<div className="img1">
  <img  src="https://www.yoox.com/images/items/12/12826931FA_14_f.jpg?impolicy=crop&width=306&height=390" alt=""/>
    <h1>VERSACE YOUNG</h1>
    <p>DON'T miss our selection of watches</p>
</div>
</div>
<div className="bom4">
<div className="in-pic2type">
  <p className="head">ONE OF A KIND</p>
  <Link to="/kids">VIEW ALL</Link>
</div>
<div className="in-pic4">
  {/* <div>
    <img  src="https://www.yoox.com/images/yoox80/banners/6821_1_GiocoeCasa_tris_K.jpg?634485886869569819" alt=""/>
      <h2>TOYS & MORE</h2>
    
  </div> */}
  <div>
    <img  src="https://www.yoox.com/images/yoox80/banners/6821_3_Billieblush_Tris_K.jpg?634485886869569819#width=387&height=540" alt=""/>
      <h4>BILLIEBLUSH</h4>
      <p>Wild and free: discover the new collectio</p>
  
  </div>
  <div>
    <img  src="https://www.yoox.com/images/yoox80/banners/6821_5_Kenzo_Tris_K.jpg?634485886869569819#width=387&height=540" alt=""/>
      <h4>KENZO</h4>
      <p>Iconic style and good vibes for SS22</p>
   
  </div>
</div>

</div>
<div className="bom5">
<div className="in-pic5f">
  <h2>LET THE SHOW BEGIN</h2>
  <p>Discover the 8 by YOOX sale</p>
  <div>
    <Link to="/kids">SHOP NOW</Link>
    <Link to="/kids">DISCOVER MORE</Link>
  </div>
</div>
<div className="in-pic5d">
  <img src="https://www.yoox.com/images/yoox80/banners/6821_1_GiocoeCasa_tris_K.jpg?634485886869569819#width=430&height=600" alt=""/>
    <h4>8 BY YOOX</h4>
    <p>HAT</p>
    <p className="orignal-price">$70.00</p>
    <p>$35.00</p>
</div>
<p><i className="fas fa-arrow-right"></i></p>
</div>
<div className="bom6">
<div className="in-pic6type">
  <p className="head">RECENTLY VIEWED</p>
  <Link to="/kids">VIEW ALL</Link>
</div>
<div className="in-pic6">
  <div>
    <img  src="https://www.yoox.com/images/items/16/16084199VK_14_f.jpg?impolicy=crop&width=306&height=390" alt=""/>
      <h4>ROY ROGER'S</h4>
      <p>Jacket</p>
      <p>$297.00</p>
  </div>
  <div>
    <img  src="https://www.yoox.com/images/items/14/14189338EF_14_f.jpg?impolicy=crop&width=306&height=390" alt=""/>
      <h4>PS PAUL SMITH</h4>
      <p>Sweater</p>
      <p>$95.00</p>
  </div>
  <div>
    <img  src="https://www.yoox.com/images/items/39/39879768LO_14_f.jpg?impolicy=crop&width=306&height=390" alt=""/>
      <h4>STELLA McCARTNEY</h4>
      <p>Turtleneck</p>
      <p className="orignal-price">$450.00</p>
      <p>$306.00</p>
  </div>
</div>

</div>
<div className="bom7">
<div className="inpic7-1">
  <div>
    <h2>LET IT GLOW</h2>
    <p>Let's have some fun, the night is about to begin!</p>
    <div>
      <a href="">DESCOVER MORE</a>
      <a href="">SHOP NOW</a>
    </div>
  </div>
</div>
<div className="inpic7-2">
  <div>
    <h2>NEW & NOW</h2>
    <p>Check out the latest arrivals</p>
    <a href="">DESCOVER THEM MORE</a>
  </div>
</div>
</div>
        
    </div>
   <Footer/>
    </>
  )
}

export default KidsMain