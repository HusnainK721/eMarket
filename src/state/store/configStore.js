import { createStore,combineReducers } from "redux";
import { productReducers } from "../reducers/productReducrs";


export const configStore=()=>{
    const  mystore = createStore(combineReducers({
        productReducers,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  return mystore;
}