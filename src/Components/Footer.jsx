import React from 'react'

const Footer = () => {
  return (
    <div>  <div className="last1">
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
                    <a href="">Shipping times & costs</a><br/><br/>
                      <a href=""> Payments and web security</a><br/><br/>
                        <a href="">Product quality</a><br/><br/>
                          <a href="">Track your order</a><br/><br/>
                            <a href="">Returns & refunds</a><br/><br/>
                              <a href="">FAQs</a><br/><br/>
                                <a href="">Size Guide</a><br/><br/>
                                </div>
                                  <div className="signup">
                                    <ion-icon name="mail-outline"></ion-icon>
                                    <h3>YOOX NEWS</h3>
                                    <p>Sign up for the newsletterand discover the latest arrivals and promotions</p>
                                    <input className="submit" type="email" placeholder="INSERT YOUR E-MAIL ADDRESS"/>
                                      <div>
                                        <div>
                                          <input id="roundcheck" type="checkbox"/>
                                            <p>Woman</p>
                                        </div>
                                        <div>
                                          <input id="roundcheck" type="checkbox"/>
                                            <p>Man</p>
                                        </div>
                                      </div>
                                      <div className="check">
                                        <input type="checkbox"/>
                                          <p>I consent to receive YOOX newsletters via email. For further information, please consult the <a href="">Privacy Policy</a>.</p>

                                      </div>
                                      <input className="btn" type="submit" placeholder="SIGN UP"/>
                                      </div>

                                      <div>
                                        <h3>MYOOX</h3>
                                        <hr/>
                                          <a href="logsin.html">Login</a><br/><br/>
                                            <a href="">My Orders</a><br/><br/>
                                              <a href="">My Details</a><br/><br/>
                                                <a href="">Dream Box</a><br/><br/>
                                                  <a href="">Première</a><br/><br/>
                                                  </div>
                                                    <div>
                                                      <h3>ABOUT US</h3>
                                                      <hr/>
                                                        <a href="">Company Info</a><br/><br/>
                                                          <a href="">Press</a><br/><br/>
                                                            <a href="">Affiliation</a><br/><br/>
                                                              <a href="">Careers</a><br/><br/>
                                                              </div>
                                                              </div></div>
  )
}

export default Footer