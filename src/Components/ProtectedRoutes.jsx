// import React from 'react'
// import { useSelector } from 'react-redux';
// import { useNavigate } from "react-router-dom";
import { store } from '../Redux/store';
// export default function PrivateRoutes({ children }) {
//   const isAuth = useSelector(store=>store.Authentication.IsAuth)
//   const nav=useNavigate()
//   console.log(isAuth)
//   if (!isAuth)
//   nav(`/`)
//   return children;
// }

import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";

export default function ProtectedRoutes({ children }) {
  const isAuth = useSelector(store=>store.signin.IsAuth)
  if (!isAuth) return <Navigate to="/signin" replace={true} />;
  return children;
}





