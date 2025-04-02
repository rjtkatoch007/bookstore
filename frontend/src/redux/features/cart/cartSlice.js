import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action)=>{
            const existingItem = state.cartItems.find(item=>item._id === action.payload._id);
            if(!existingItem){
                state.cartItems.push(action.payload)
                alert("Item added successfully!")
            } else {
                alert("Item already exists!")
            }

        }
      
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addToCart/* , removeFromCart, clearCart  */} = cartSlice.actions
  
  export default cartSlice.reducer