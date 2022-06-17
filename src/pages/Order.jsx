import React from 'react'
import { Link } from 'react-router-dom'

const Order = () => {
  return (
    <div>
      <h1> <Link to="/" style={{textDecoration:"none"}}>CONTINUE SHOPPING</Link></h1> 
        <img style={{ width:"70%", justifyContent:"center" }}src="https://i.ytimg.com/vi/zx8jj0rljOA/maxresdefault.jpg"/>
    </div>
  )
}

export default Order