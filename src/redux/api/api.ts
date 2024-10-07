import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    baseQuery: fetchBaseQuery({
        // baseUrl: "import.meta.env.VITE_BaseApi/api",
        // baseUrl: "http://localhost:5000/api",
        // baseUrl: "https://sports-facility-booking-platform-server-ten.vercel.app/api",
        baseUrl: process.env.NODE_ENV === "production" ? "https://sports-facility-booking-platform-server-ten.vercel.app/api" : "http://localhost:5000/api",
    }),
    endpoints: (builder) => ({
        getFacility: builder.query({
            query: () => ({
                url: "/facility",
                method: "GET",
            }),
        }),
    }),
});

export const { useGetFacilityQuery } = baseApi;
