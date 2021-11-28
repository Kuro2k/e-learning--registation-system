import { createSlice } from '@reduxjs/toolkit';



export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        total: 0,
    },
    reducers: {
        initCartAction: (state, action) => {
            console.log(action.payload);
            state.cart = action.payload;
            state.total = 0;
            for (let i = 0; i < action.payload.length; i++) {
                state.total += action.payload[i].tuition_fee;
            }
        },
        addToCartAction: (state, action) => {
            state.cart.push(action.payload);
            state.total += action.payload.tuition_fee;
        },
        delToCartAction: (state, action) => {
            console.log(action.payload);
            let index = -1;
            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].id === action.payload)
                {
                    index = i;
                    state.total -= state.cart[i].tuition_fee;
                }
            }
            if (index > -1) {
                state.cart.splice(index, 1);
            }
        }
    }
})

export const { addToCartAction, delToCartAction, initCartAction} = cartSlice.actions;
export default cartSlice.reducer;