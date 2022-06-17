import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Total = ({total}) => {
    const nav=useNavigate()

    const handleClick=()=>{
      nav("/checkout")
    }

    
    var sum= total.toFixed(2)
  return (

    <div >
        <div className='totalpage'>
            <h4>TOTAL FOR ITEMS</h4>
            <h4>{sum}</h4>
        </div>
        <div className='totalpage'>
            <h4>SHIPPING
              
            </h4>
            <h4>FREE</h4>
        </div>
        <div className='totalpage'>
            <h4>PAYMENT</h4>
            <h4>0</h4>
        </div>
        <div className='totalpage'>
            <h3>ORDER TOTAL</h3>
            <h3>{sum}</h3>
        </div>

        <div className='totalpage'>
            <h4>BACK TO SHOPPING</h4>
            {/* <button></button> */}
      {/* <button className='checkout' >   <Link  style={{color:"white" }}to="/checkout">CHECK OUT</Link></button>  */}
      <button  className="btn" onClick={()=>{handleClick()}}>
        CHECK OUT
</button>
        </div>
{/* <h1>{total}</h1> */}
    </div>
  )
}

export default Total