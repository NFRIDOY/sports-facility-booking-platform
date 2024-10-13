import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IFacility } from "../../../types";

export interface IBookingRequest {
    date: Date;
    startTime: string;
    endTime: string;
    facility: string;
}

export interface BookingState {
    value: IBookingRequest;
}

const initialState: BookingState = {
    value: {
        date: new Date(),
        startTime: "",
        endTime: "",
        facility: "",
    },
};

export const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        addBooking: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value = action.payload;
        },
        // removeBooking: (state) => {
        //     state.value -= 1;
        // },
        // addBookingByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload;
        // },
    },
});

// Action creators are generated for each case reducer function
export const { addBooking, removeBooking, addBookingByAmount } = bookingSlice.actions;

export default bookingSlice.reducer;
