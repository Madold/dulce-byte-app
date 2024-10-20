import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticating: false,
        user: null,
        errorMessage: null,
        authenticated: false
    },
    reducers: {
        login: (state) => {
            state.isAuthenticating = true;
        },
        logout: (state) => {
            state.user = null;
        },
        finishLogin: (state) => {
            state.isAuthenticating = false;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setErrorMessage: (state, action) => {
            state.errorMessage = action.payload;
            state.isAuthenticating = false;
        },
        setAuthenticated: (state, action) => {
            state.authenticated = action.payload;
        }
    }
});

export const { login, logout, finishLogin, setUser, setErrorMessage, setAuthenticated  } = authSlice.actions;