import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {  fetchData  } from "../Redux/action";
// import "./ProductViewAll.css";
import "./Products.css";

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import axios from "axios";
import Navbar from "../Components/Navbar";
import Navbar3 from "../Components/Navbar3";
import Footer from "../Components/Footer";

export const Products = () => {
  const nav=useNavigate()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const handleClick=(id)=>{
    nav(`/product/${id}`)
    console.log(id)
  }
    function sortHandler(e) {
  //  dispatch(sortProduct(e.target.value));
  }

  // function Addtowishlist(prodId) {
  //     axios
  //       .post(`https://yooxapi.herokuapp.com/wishlistData`, {
  //         useId: `${useridData}`,
  //         productId: `${prodId}`,
  //       })
  //       .then(function (response) {
  //         // handle success
  //         alert("Add to Dream Box Sucessfully");
  //         console.log(response);
  //       })
  //       .catch(function (error) {
  //         // handle error
  //         console.log(error);
  //       })
  //       .then(function () {
  //         // always executed
  //       });
  //   }
  
  const ProductData = useSelector((store) => {
    return store.data.products;
  });
  console.log("ProductData:", ProductData);
    return (
      <>
      <Navbar3/>
    
    <div>
      
        {/* <div className="sorting-prt">
            <div><span className="bold-prt">SAVE SEARCH</span> View your saved searches</div>
            <div>{ `${ProductData.length}+ items`}</div>
            <div >
                <select  className="sort-prt" onChange={sortHandler}>
                    <option  className="srt-option">SORT BY</option>
                    <option  className="srt-option" value="high" >HIGHEST PRICE</option>
                    <option  className="srt-option"  value="low">LOWEST PRICE</option>
                  
                </select>
            </div>
</div> */}
      <div className="all-product">
   
      {ProductData.map((e) => {
        const { title, price, description, category, image, id, rating } = e;
        function convert(a, b) {
          const x = +a;
          const y = +b;
          return ((x - y) / x) * 100;
        }
        return (
     
          <div  className="prt-div" key={id} onClick={()=>{handleClick(id)}}>

            <img src={image}></img>
            <div className="view">
              < VisibilityOutlinedIcon className="view-icon" onClick={ ()=>{ nav(`/product/${id}`)}}/>
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
  );
};
