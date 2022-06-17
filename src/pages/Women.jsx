import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Navbar2 from '../Components/Navbar2'
import { fetchDatam, fetchdataw } from '../Redux/action'
import { store } from '../Redux/store'

const Women = () => {

  const nav= useNavigate()
    const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(fetchdataw("women's clothing"))
    },[])

    const handleClick=(id)=>{
      nav(`/product/${id}`)
      console.log(id)
    }


     var sele=useSelector((store)=>
        store.data.products
    )
    console.log(sele)
  return (
<>
    <Navbar2/>
    <div>
      <div className="all-product"  >
   
   {sele.map((e) => {
const { title, price, description, category, image, id, rating } = e;
function convert(a, b) {
const x = +a;
const y = +b;
return ((x - y) / x) * 100;
}
return (

<div  className="prt-div" key={id}  onClick={()=>{handleClick(id)}} >

 <img src={image}></img>
 <div className="view">
   {/* < VisibilityOutlinedIcon className="view-icon" onClick={ ()=>{ nav(`/product/${id}`)}}/> */}
   {/* < FavoriteBorderOutlinedIcon className="love-icon-1" onClick={ ()=>{ Addtowishlist( id) }}/> */}
 </div>
 <div className="prt-name">{title}</div>
 <div className="prt-type">{price}</div>

 <div className="prt-finalPrice">{` $ ${price}`}</div>
</div>
);
})}
</div>
      
             

    </div>
    <Footer/>
    </>
  )
}

export default Women