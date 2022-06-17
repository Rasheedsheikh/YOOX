import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import {Products} from '../pages/Products'
import Product from '../pages/Product'
import Cart from '../pages/Cart'
import Navbar from './Navbar'
import ProtectedRoutes from './ProtectedRoutes'
import {SignIn} from '../pages/Login/SignIn'
import Mens from '../pages/Mens'
import Kids from '../pages/Kids'

import Women from '../pages/Women'
import SignUp from '../pages/Login/SignUp'

import MainMen from '../pages/MainMen'
import CheckOut from '../pages/Login/CheckOut'
import KidsMain from '../pages/KidsMain'

import Order from '../pages/Order'
import Payment2 from '../pages/Payment2'
const AllRoutes = () => {
  return (
    <div>
{/* <Navbar/> */}

      <Routes>
      <Route path="/women" element={<Women/>}/>
        <Route path="/kids" element ={<Kids/>}/>
        <Route path="/mens" element={<Mens/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup"  element={<SignUp/>}/>
        <Route path="/" element= {<HomePage/>}/>
        <Route path="/products" element= {<Products/>}/>
        <Route path="/product/:id" element= {<Product/> }/>
        <Route path="/cart" element={<ProtectedRoutes> <Cart /> </ProtectedRoutes>}></Route>

        <Route path="/mainmen" element={<MainMen/>}/>
        <Route path="/kidsmain" element={<KidsMain/>}/>

        <Route path="/checkout" element={<CheckOut/>}/>
     
        <Route path="/order"   element={<Order/>}/>
        <Route path="/payment2" element={<Payment2/>}/>
      </Routes>

    </div>
  )
}

export default AllRoutes