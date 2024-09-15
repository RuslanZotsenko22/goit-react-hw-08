import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register, } from "./operations";

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, handlePending)
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.isLoading = false;
            })
            .addCase(register.rejected, handleRejected)
            .addCase(login.pending, handlePending)
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.isLoading = false;

            })
            .addCase(login.rejected, handleRejected)

            .addCase(logout.pending, handlePending)
            .addCase(logout.fulfilled, (state) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
                state.isLoading = false;
            })
            .addCase(logout.rejected, handleRejected)


            .addCase(refreshUser.pending, handlePending)
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, handleRejected);
    }


})


export const authReducer = authSlice.reducer;