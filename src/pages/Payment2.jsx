import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'
import Navbar3 from '../Components/Navbar3'
import "./product2.css"

const Payment2 = () => {

    const nav=useNavigate()

    const handleClick=()=>{
      nav("/order")
    }


  return (
    <>
    <Navbar3/>
    <div>

<div className="contai">
    <div className="log">

    <hr/>
    </div>
    <div className="feddex">
       
    </div>
    <h1>Shipping Address</h1>
    <div className="ship">
        
      
            <input type="text" className="fiName" placeholder="First Name"/>
            <input type="text" className="laName" placeholder="Last Name"/><br/>
            <input type="text" className="address1" placeholder="Address Line 1"/><br/>
            <input type="text" className="address2" placeholder="Address Line 2"/>
            <input type="text" className="addressTyp" placeHolder="District"/>
               <br/>
            <input type="text" className="cit" placeholder="City"/>
            <select className="stae">
                <option value="">Andhra Pradesh</option>
                <option value="">TmailNadu</option>
                <option value="">Karnataka</option>
                <option value="">Kerla</option>
                <option value="">Odisa</option>
            </select>
            <br/>
            <input type="text" className="zip" placeholder="Std Code"/>
            <input type="text" className="mobile" placeholder="Mobile Phone"/><br/>

            <h2>Payment Options</h2>

            <p>
                <input type="radio" className="test1" name="radio-group"/>
                <label for="test1">Credit / Debit / OverStock Card</label>
            </p>

            <div className="cardDetails">
                <input type="number" className="cardNumber" placeholder="Card Number"/><br/>
                <div>
                    <select className="month">
                        <option value="1">Jan</option>
                        <option value="2">Feb</option>
                        <option value="3">Mar</option>
                        <option value="4">Apr</option>
                        <option value="5">May</option>
                        <option value="6">Jun</option>
                        <option value="7">Jul</option>
                        <option value="8">Aug</option>
                        <option value="9">Sep</option>
                        <option value="10">Oct</option>
                        <option value="11">Nov</option>
                        <option value="12">Dec</option>
                    </select>
                    <select className="year">
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                    </select>
                    <input type="number" className="cvv" placeholder="CVV"/>
                </div>

                
            </div>
               
             

            <input onClick={()=>{handleClick()}} value="PLACE ORDER" className="btn"/>
    </div>
    </div>
</div>
<Footer/>
</>
  )
}

export default Payment2