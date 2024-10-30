import { createSlice } from '@reduxjs/toolkit';

const cart = {
    products: [],
    quantity: 0,
    amount: 0
}

const product = {
    cookie: {
        id: 1,
        name: "Redvelvet",
        description: "Galleta de chocolate con chispas de chocolate",
        price: 4000,
        cookieCoverUrl: "https://github.com/Madold/dulce-bite-imgs/blob/main/redvelvet.png?raw=true",
        enphasisColor: "#61062E"
    },
    quantity: 1
}

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        cart: {
            products: [],
            quantity: 0,
            amount: 0
        },
        isPlacingOrder: false,
    },
    reducers: {
        addProduct: (state, action) => {

            const cookie = state.cart.products.find(product => product.cookie.id === action.payload.cookie.id);

            if (cookie) {
                return
            }

            state.cart.products.push(action.payload);
            state.cart.quantity += action.payload.quantity;
            state.cart.amount += action.payload.quantity * action.payload.cookie.price;
        },
        increaseProductQuantity: (state, action) => {
            const product = state.cart.products.find(product => product.cookie.id === action.payload);
            product.quantity++;
            state.cart.quantity++;
            state.cart.amount += product.cookie.price;
        },
        decreaseProductQuantity: (state, action) => {
            const product = state.cart.products.find(product => product.cookie.id === action.payload);

            if (product.quantity > 1) {
                product.quantity--;
                state.cart.quantity--;
                state.cart.amount -= product.cookie.price;
                return
            }

            state.cart.products = state.cart.products.filter(product => product.cookie.id !== action.payload);
            state.cart.quantity--;

        },
        setPlacingOrder: (state, action) => {
            state.isPlacingOrder = action.payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const { addProduct, increaseProductQuantity, decreaseProductQuantity, setPlacingOrder } = homeSlice.actions;