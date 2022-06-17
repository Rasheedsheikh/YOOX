import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const HomePage = () => {
  return (
    
    <div>

<Navbar/>
     
      <div className="bom">

        <div><img src="https://www.yoox.com/images/yoox80/banners/6655_4_HL_MKD_SALE_W.jpg?634485886869569819#width=430&height=600" alt=""/>
          <h2>SALE: UP TO 70% OFF</h2>
          <p>Even more items added!</p>
          <a >SHOP NOW</a>
        </div>

        <div>
          <p className="head">DESIGNERS</p>
          <a >DOLCE & GABBANA</a>
          <a >MAISON MARGIELA</a>
          <a >PRADA</a>
          <a >MARNI</a>
          <a >GUCCI</a>
          <a >BALENCIAGA</a>

          <a >GIVENCHY</a>
          <a >JIL SENDER</a>
          <a >DRIES VAN NOTEN</a>
          <a >THOM BROWNE</a>
        
            <Link to="/products">VIEW ALL</Link>
        </div>
        <div> <img src="https://www.yoox.com/images/yoox80/banners/5628_1_Multiform_HL.gif?634485886869569819#width=430&height=600" alt=""/>
          <h2>TURN BACK TIME</h2>
          <p>Pants — pick your favorite retro style</p>
          <a >SHOP NOW</a>
        </div>

      </div>
      <div className="bom2">
        <div className="in-pic2type">
          <p className="head">NEW ARRIVALS</p>
          <Link to="/products">VIEW ALL</Link>
        </div>
        <div className="in-pic2">
          <div>
            <img  src="https://www.yoox.com/images/items/12/12709341XK_14_f.jpg?impolicy=crop&width=306&height=390" alt=""/>
              <h4>VERSACE</h4>
              <p>Sweetshirt</p>
              <p>$497.00</p>
          </div>
          <div>
            <img  src="https://www.yoox.com/images/items/13/13697944FL_14_f.jpg?impolicy=crop&width=306&height=390" alt=""/>
              <h4>MARNI</h4>
              <p>Casual pants</p>
              <p>$879.00</p>
          </div>
          <div>
            <img  src="https://www.yoox.com/images/items/45/45633893SG_14_f.jpg?impolicy=crop&width=306&height=390" alt=""/>
              <h4>FENDI</h4>
              <p>Cross-Body Bag</p>
              <p>$1,483.00</p>
          </div>
        </div>

      </div>
      <div className="bom3">
        <div className="img1">
          <img  src="https://www.yoox.com/images/yoox80/banners/6825_2_Seletti_Tris.png?634485886869569819#width=473&height=660" alt=""/>
            <h1>SELETTI</h1>
            <p>Pure Creativity</p>
        </div>
        <div>
          <img  src="https://www.yoox.com/images/yoox80/banners/6825_8_SeeByChloe_W_Tris.jpg?634485886869569819#width=473&height=660" alt=""/>
            <h1>SEE BY CLOE</h1>
            <p>Two accessories created exclusivily for YOOX</p>
        </div>
        <div className="img1">
          <img  src="https://www.yoox.com/images/yoox80/banners/6825_3_BaumeMercier_Tris_W.png?634485886869569819#width=473&height=660" alt=""/>
            <h1>BAUME & MERCIER</h1>
            <p>DON'T miss our selection of watches</p>
        </div>
      </div>
      <div className="bom4">
        <div className="in-pic2type">
          <p className="head">ONE OF A KIND</p>
          <a >VIEW ALL</a>
        </div>
        <div className="in-pic4">
          <div>
            <img  src="https://www.yoox.com/images/items/35/35461072XJ_14_f.jpg?impolicy=crop&width=306&height=390" alt=""/>
              <h4>ROSIE ASSOULIN</h4>
              <p>Maxi Skirts</p>
              <p className="orignal-price">1,100.00</p>
              <p>$891.00</p>
          </div>
          <div>
            <img  src="https://www.yoox.com/images/items/15/15119060SR_14_f.jpg?impolicy=crop&width=306&height=390" alt=""/>
              <h4>MISSONI</h4>
              <p>Long dress</p>
              <p className="orignal-price">$2,000.00</p>
              <p>$1,540.00</p>
          </div>
          <div>
            <img  src="https://www.yoox.com/images/items/35/35430466XM_14_f.jpg?impolicy=crop&width=306&height=390" alt=""/>
              <h4>MISSONI</h4>
              <p>Maxi skirts</p>
              <p className="orignal-price">$1,200.00</p>
              <p>$408.00</p>
          </div>
        </div>

      </div>
      <div className="bom5">
        <div className="in-pic5f">
          <h2>LET THE SHOW BEGIN</h2>
          <p>Discover the 8 by YOOX sale</p>
          <div>
            <a >SHOP NOW</a>
            <a >DISCOVER MORE</a>
          </div>
        </div>
        <div className="in-pic5d">
          <img src="https://www.yoox.com/images/items/46/46765087PA_14_f.jpg?impolicy=crop&width=306&height=390" alt=""/>
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
          <a >VIEW ALL</a>
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
              <a >DESCOVER MORE</a>
              <a >SHOP NOW</a>
            </div>
          </div>
        </div>
        <div className="inpic7-2">
          <div>
            <h2>NEW & NOW</h2>
            <p>Check out the latest arrivals</p>
            <a >DESCOVER THEM MORE</a>
          </div>
        </div>
      </div>
      <div className="last1">
        <div>
          <h3>NEW TO YOOX</h3>
          <hr/>
            <a >Shopping guide</a><br/><br/>
              <a>iPhone/iPad/Android</a><br/><br/>
                <a>Browse all Designers</a><br/><br/>
                  <a>Browse all Categories</a><br/><br/>
                  </div>
                    <div>
                      <h3>HELP</h3>
                      <hr/>
                        <a >Shipping times & costs</a><br/><br/>
                          <a > Payments and web security</a><br/><br/>
                            <a >Product quality</a><br/><br/>
                              <a >Track your order</a><br/><br/>
                                <a >Returns & refunds</a><br/><br/>
                                  <a >FAQs</a><br/><br/>
                                    <a >Size Guide</a><br/><br/>
                                    </div>
                                      <div className="signup">
                                        <ion-icon name="mail-outline"></ion-icon>
                                        <h3>YOOX NEWS</h3>
                                        <p>Sign up for the newsletterand discover the latest arrivals and promotions</p>
                                        <input className="submit" type="email" placeholder="INSERT YOUR E-MAIL ADDRESS"/>
                                          <div>
                                            <div>
                                              <input  type="checkbox"/>
                                                <p>Woman</p>
                                            </div>
                                            <div>
                                              <input  type="checkbox"/>
                                                <p>Man</p>
                                            </div>
                                          </div>
                                          <div className="check">
                                            <input type="checkbox"/>
                                              <p>I consent to receive YOOX newsletters via email. For further information, please consult the <a >Privacy Policy</a>.</p>

                                          </div>
                                          <input className="btn" type="submit" placeholder="SIGN UP"/>
                                          </div>

                                          <div>
                                            <h3>MYOOX</h3>
                                            <hr/>
                                              <Link to="/signin">Login</Link><br/><br/>
                                                <a >My Orders</a><br/><br/>
                                                  <a >My Details</a><br/><br/>
                                                    <a >Dream Box</a><br/><br/>
                                                      <a >Première</a><br/><br/>
                                                      </div>
                                                        <div>
                                                          <h3>ABOUT US</h3>
                                                          <hr/>
                                                            <a >Company Info</a><br/><br/>
                                                              <a >Press</a><br/><br/>
                                                                <a >Affiliation</a><br/><br/>
                                                                  <a >Careers</a><br/><br/>
                                                                  </div>
                                                                  </div>
                                                                  <div className="last2">
                                                                    <div>
                                                                      <p>CONNECT WITH US</p>
                                                                     

                                                                    </div>
                                                                   
                                                                  </div>
                                                                
</div>

                                                         
                                                              
                                                                )}

                                                                export default HomePage