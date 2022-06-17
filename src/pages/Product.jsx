import React from 'react'
import { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SimpleImageSlider from "react-simple-image-slider";
import { useParams } from 'react-router-dom';

import { addcart, fetchData, fetchProduct } from "../Redux/action"
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Navbar3 from '../Components/Navbar3';

const Product = () => {


  //  const isAuth = useSelector(store=>store.Authentication.IsAuth)
  //   // const nav=useNavigate()
  //    console.log(isAuth)
  const dispatcher = useDispatch()
  const handleClick = () => {

    // console.log(ProductData)
    dispatcher(addcart(ProductData,{quantity:1}))

  }


  const { id } = useParams();

  const ProductData = useSelector((store) => {
    return store.product.product

  });
  // console.log(ProductData)

  // console.log(id)
  useEffect(() => {
    dispatcher(fetchProduct(id))


  }, [])
  const { title, price, description, category, image, size, ids, rating } = ProductData;
  return (
    <>
<Navbar3/>

    <div  className="prodind" key={ids} >

      <img src={image}></img>
      <div className="prodind2">
        {/* < VisibilityOutlinedIcon className="view-icon" onClick={ ()=>{ nav(`/product/${id}`)}}/> */}
        {/* < FavoriteBorderOutlinedIcon className="love-icon-1" onClick={ ()=>{ Addtowishlist( id) }}/> */}
      
      <div className="prt-name">{title}</div>
      <div className="prt-type">{price}</div>

      <div className="prt-finalPrice">{` $ ${price}`}</div>

      <br></br>
      <button style={{ textAlign: "center", backgroundColor: "black", color: "white" }} onClick={() => { handleClick() }}>ADD TO CART</button>
    </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <Footer/>
    </>
  );

}

export default Product