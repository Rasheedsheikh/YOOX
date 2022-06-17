import { FETCH_DATA_REQUEST ,FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE,
 FETCH_PRODUCT_FAILURE ,FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_REQUEST,
SIGN_IN_REQUEST,SIGN_IN_SUCCESS,SIGN_IN_FAILURE,
ADD_CART_REQUEST,ADD_CART_FAILURE, ADD_CART_SUCCESS,
GET_CART_REQUEST, GET_CART_SUCCESS, GET_CART_FAILURE,IsAuth
} from "./actionTypes";
import  axios  from "axios";
import { useDispatch } from "react-redux";

const fetchDataRequest=(payload) => {
    return {
        type: FETCH_DATA_REQUEST,
        payload
    }
}

const fetchDataSuccess=(payload) => {
   console.log(payload)
    return {
        type: FETCH_DATA_SUCCESS,
        payload
    }
}

const fetchDataFailure=(payload) => {
    return {
        type: FETCH_DATA_FAILURE,
        payload

    }
}


const fetchData=(payload)=> {
    return (dispatch) => {
        dispatch (fetchDataRequest(payload))
    
    
    axios.get("http://localhost:3005/products")

    .then(res=> dispatch(fetchDataSuccess(res.data)))
    .catch (err => dispatch(fetchDataFailure(err.data)))
}}
// MEN
const fetchDatam=(mens)=> {
    // console.log(mens)
    return (dispatch) => {
        dispatch (fetchDataRequest(mens))
    
    
    axios.get("http://localhost:3005/products",
   {params:{category:mens}
    })
    .then(res=> dispatch(fetchDataSuccess(res.data)))
    .catch (err => dispatch(fetchDataFailure(err.data)))
}}

// WOMEN
const fetchdataw=(bags)=> {
    // console.log(mens)
    return (dispatch) => {
        dispatch (fetchDataRequest(bags))
    
    
    axios.get("http://localhost:3005/products",
   {params:{category:bags}
    })
    .then(res=> dispatch(fetchDataSuccess(res.data)))
    .catch (err => dispatch(fetchDataFailure(err.data)))
}}

// KIDS
const fetchdatak=(kids)=> {
    // console.log(mens)
    return (dispatch) => {
        dispatch (fetchDataRequest(kids))
    
    
    axios.get("http://localhost:3005/products",
   {params:{category:kids}
    })
    .then(res=> dispatch(fetchDataSuccess(res.data)))
    .catch (err => dispatch(fetchDataFailure(err.data)))
}}




const fetchProductRequest=(payload) => {
    return {
        type: FETCH_PRODUCT_REQUEST,
        payload
    }
}

const fetchProductSuccess=(payload) => {
//  console.log(payload)
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload
    }
}

const fetchProductFailure=(payload) => {
    return {
        type: FETCH_PRODUCT_FAILURE,
        payload
        
    }
}


const fetchProduct=(val)=> {
    return (dispatch) => {
        dispatch (fetchProductRequest(val))
    
    
    axios.get(`http://localhost:3005/products/${val}`)
    .then(res=> dispatch(fetchProductSuccess(res.data)))
    .catch (err => dispatch(fetchProductFailure(err.data)))
}}


const SignInRequest=(payload) => {
    return {
        type: SIGN_IN_REQUEST,
        payload
    }
}

const SignInSuccess=(payload) => {
   
    // console.log(payload)

    return {
        type: SIGN_IN_SUCCESS,
        payload
    }
}

const SignInFailure=(payload) => {
    return {
        type: SIGN_IN_FAILURE,
        payload

    }
}

const signin=(e)=>{
    // console.log(e.name)
    return (dispatch) => {
        dispatch (SignInRequest(e))
    
    
        axios.get('http://localhost:3005/users', {
          params:{
               name: e.name,
              password:  e.password
          }
            
         })
    .then(res=> dispatch(SignInSuccess(res.data)))
    .catch (err => dispatch(SignInFailure(err.data)))
}}




// ADD CART

const AddCartRequest=(payload) => {
    return {
        type: ADD_CART_REQUEST,
        payload
    }
}

const AddCartSuccess=(payload) => {
   
      console.log(payload)

    return {
        type: ADD_CART_SUCCESS,
        payload
    }
}

const AddCartFailure=(payload) => {
    return {
        type: ADD_CART_FAILURE,
        payload

    }
}
// "e": {
//     "id": 2,
//     "title": "Mens Casual Premium Slim Fit T-Shirts ",
//     "price": 22.3,
//     "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     "rating": {
//       "rate": 4.1,
//       "count": 259
//     }
//   },
//   "id": 1
const addcart=(e)=>{
     console.log(e)
     const {data}=e
    return (dispatch) => {
        dispatch (AddCartRequest(e))
    
    
        axios.post('http://localhost:3005/cart',{params:{e}})

    .then(res=> dispatch(AddCartSuccess(res.data)))
    .catch (err => dispatch(AddCartFailure(err.data)))
}}

export const isAuthAction = (value) => {return { type: IsAuth,payload:value }};


// GET CART


const GetCartRequest=(payload) => {
    return {
        type: GET_CART_REQUEST,
        payload
    }
}

const GetCartSuccess=(payload) => {
   
      console.log(payload)

    return {
        type: GET_CART_SUCCESS,
        payload
    }
}


const GetCartFailure=(payload) => {
    return {
        type: GET_CART_FAILURE,
        payload

    }
}


const getcart=(e)=>{
     console.log(e)
    return (dispatch) => {
        dispatch (GetCartRequest(e))
    
    
        axios.get('http://localhost:3005/cart')
    .then(res=> dispatch(GetCartSuccess(res.data)))
    .catch (err => dispatch(GetCartFailure(err.data)))
}}




export { fetchData , fetchProduct,signin, fetchDatam, fetchdataw, fetchdatak,addcart  ,getcart} 
