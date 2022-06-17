import React from 'react'
import { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Navbar3 from '../Components/Navbar3'
import { fetchDatam } from '../Redux/action'

const Mens = () => {

  const nav=useNavigate()
    const dispatcher=useDispatch()
    useEffect(()=>{
        dispatcher(fetchDatam("men's clothing"))
    
        
      },[])
      const ProductData = useSelector((store) => {
        return store.data.products;
        
      });
      console.log(ProductData)

      const handleClick=(id)=>{
        nav(`/product/${id}`)
        console.log(id)
      }
  return (
    <>
    <Navbar3/>
 
    <div>
       <div className="all-product"  >
   
   {ProductData.map((e) => {
const { title, price, description, category, image, id, rating } = e;
function convert(a, b) {
const x = +a;
const y = +b;
return ((x - y) / x) * 100;
}
return (

<div  className="prt-div" key={id} onClick={()=>{handleClick(id)}} >

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

export default Mens
