import { FETCH_DATA_REQUEST ,FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE,
    FETCH_PRODUCT_FAILURE ,FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_REQUEST,
   SIGN_IN_REQUEST,SIGN_IN_SUCCESS,SIGN_IN_FAILURE,
ADD_CART_REQUEST,ADD_CART_SUCCESS ,ADD_CART_FAILURE,
GET_CART_REQUEST,GET_CART_SUCCESS,GET_CART_FAILURE,IsAuth} from "./actionTypes";

const initState = {
    products : [],
    error : " ",
    loading:false

}


const initState2 = {
    product : [],
    error : " ",
    loading:false

}

const initState3= {IsAuth:[]}



const initState4 = {
  cart:[],
  loading:false,
  error:""
}



const reducer =(state = initState ,action) => {
    const {type,payload}=action;
    switch(type)
    {
        case FETCH_DATA_REQUEST:
         return {
            ...state,
            loading:true,
            error:" "
        }

        case FETCH_DATA_SUCCESS:
        return {
            ...state,
            products: payload,
            loading:true,
            error:" "
        }

        case FETCH_DATA_FAILURE:
            return {
                ... state,
                loading:false,
                error:payload
            }

            default:
                return state
    }

    

}


const reducer2 =(state = initState2 ,action) => {
    const {type,payload}=action;
    switch(type)
    {
        case FETCH_PRODUCT_REQUEST:
         return {
            ...state,
            loading:true,
            error:" "
        }

        case FETCH_PRODUCT_SUCCESS:
        return {
            ...state,
            product: payload,
            loading:true,
            error:" "
        }

        case FETCH_PRODUCT_FAILURE:
            return {
                ... state,
                loading:false,
                error:payload
            }

            default:
                return state
    }
}



const initalState = { IsAuth: false };
 const isAuthreducer = (state=initalState,{type,payload}) => {
     switch (type) {
         case IsAuth:
             return {
                 ...state, IsAuth
                     : payload
             };
         default:
             return state;
    };
}





const reducer4 =(state = initState4 ,action) => {
    const {type,payload}=action;
    switch(type)
    {
        case GET_CART_REQUEST:
         return {
            ...state,
            loading:true,
            error:" "
        }

        case GET_CART_SUCCESS:
        return {
            ...state,
            cart: payload,
            loading:true,
            error:" "
        }

        case GET_CART_FAILURE:
            return {
                ... state,
                loading:false,
                error:payload
            }

            default:
                return state
    }

    

}







export {reducer , reducer2 ,isAuthreducer,  reducer4}