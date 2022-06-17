import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'
import Navbar3 from '../Components/Navbar3'
import "./Payment"

const Payment = () => {

  const nav=useNavigate()

  const handleClick=()=>{
    nav("/order")
  }
  return (
    <>
    <Navbar3/>
    <br /><br /><br />

    <div>
<div className="row">
  <div className="col-75">
    <div className="container">
      <form action="/action_page.php">

        <div className="row">
          <div className="col-50">
            <h3>Billing Address</h3>
           
            <input type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
           
            <input type="text" id="email" name="email" placeholder="john@example.com"/>
          
            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
           
            <input type="text" id="city" name="city" placeholder="New York"/>

            <div className="row">
              <div className="col-50">
         
                <input type="text" id="state" name="state" placeholder="NY"/>
              </div>
              <div className="col-50">
          
                <input type="text" id="zip" name="zip" placeholder="10001"/>
              </div>
            </div>
          </div>

          <div className="col-50">
            <h3>Payment</h3>
             <label >Accepted Cards</label>
            <div className="icon-container">
               <p className="fa fa-cc-visa" ></p>
               <p className="fa fa-cc-amex" ></p>
               <p className="fa fa-cc-mastercard" ></p>
               <p className="fa fa-cc-discover"></p>
             </div>
             <label >Name on Card</label>
             <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>
             <label>Credit card number</label>
             <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
             <label>Exp Month</label>
             <input type="text" id="expmonth" name="expmonth" placeholder="September"/>

             <div className="row">
               <div className="col-50">
                 <label>Exp Year</label>
                 <input type="text" id="expyear" name="expyear" placeholder="2018"/>
               </div>
               <div className="col-50">
                 <label >CVV</label>
                 <input type="text" id="cvv" name="cvv" placeholder="352"/>
               </div>
            </div> 
          </div>

        </div>
        <label>
          <input type="checkbox"  name="sameadr"/> Shipping address same as billing
        </label>
        <input onClick={()=>{handleClick()}} value="PLACE ORDER" className="btn"/>
      </form>
    </div>
  </div>

  {/* <div className="col-25">
    <div className="container">
      <h4>Cart
        <span className="price" style="color:black">
          <p className="fa fa-shopping-cart"></p>
          <b>4</b>
        </span>
      </h4> 
     
    </div>
  </div> */}
</div>
</div>
<br /><br /><br />
<Footer/>
   </>
  )
}

export default Payment 