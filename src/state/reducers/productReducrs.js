export const productReducers=(state={product:["nike"]},action)=>{
    if  (action.type === "ADD_PRODUCT"){
        return{
            ...state,
            product:[...action.data,...state.product],
        };
        if (action.type === "REMOVE_PRODUCT"){
            // const newData =  state.product.filter((item) => item !== action.data);
            state.product.pop();

            return {
                // ...state,        
                product : state.product
                
            }
        }
    }
    return state;
};
