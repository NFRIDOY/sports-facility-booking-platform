import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../types";

interface UserState {
    currentUser: IUser | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
}

const initialState: UserState = {
    currentUser: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginRequest(state) {
            state.isLoading = true;
            state.error = null;
        },
        loginSuccess(state, action: PayloadAction<IUser>) {
            state.isLoading = false;
            state.currentUser = action.payload;
            state.isAuthenticated = true;
        },
        loginFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        logout(state) {
            state.currentUser = null;
            state.isAuthenticated = false;
        },
        updateUser(state, action: PayloadAction<IUser>) {
            state.currentUser = action.payload;
        },
    },
});

export const { loginRequest, loginSuccess, loginFailure, logout, updateUser } =
    userSlice.actions;

export default userSlice.reducer;
