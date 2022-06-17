import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../Components/Footer';
import Navbar3 from '../Components/Navbar3';
import { getcart } from '../Redux/action'
import "./Products.css";
import Total from './Total';


const Cart = () => {
  
 const select= useSelector((store)=>store.cart.cart)
 //console.log(select)
 var arr=[]
 var total1=0
 for(var i of select){
  console.log(i["params"].e.price)
  total1=total1+i["params"].e.price
  arr.push(i["params"].e)
 }
 console.log(arr)
    const dispatch= useDispatch()
    useEffect(()=>{
     dispatch(getcart())
    },[])
 // console.log(select.e)
  return (
    <>
    <Navbar3/>

    <br /><br />
    <div>
      
       {arr.map((e,i) => {
        const { title, price, description, category, image, id, rating } = e;
        // function convert(a, b) {
        //   const x = +a;
        //   const y = +b;
        //   return ((x - y) / x) * 100;
        // }
        return (
     
          <div  className="origcart" key={i} >

            <img src={image}></img>
            {/* <div className="origcart2"> */}
              {/* < VisibilityOutlinedIcon className="view-icon" onClick={ ()=>{ nav(`/product/${id}`)}}/> */}
              {/* < FavoriteBorderOutlinedIcon className="love-icon-1" onClick={ ()=>{ Addtowishlist( id) }}/> */}
            {/* </div> */}
            <div className="prt-name">{title}</div>
            <div className="prt-type">{price}</div>
       
            <div className="prt-finalPrice">{` $ ${price}`}</div>
          </div>
        );
      })}
      {/* <h1>{total1}</h1> */}

    <Total  total={total1}/>

    <br /><br />

    <Footer/>
    </div>
    </>
  )

}

export default Cart