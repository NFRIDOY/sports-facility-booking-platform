import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    baseQuery: fetchBaseQuery({
        // baseUrl: "import.meta.env.VITE_BaseApi/api",
        // baseUrl: "http://localhost:5000/api",
        // baseUrl: "https://sports-facility-booking-platform-server-ten.vercel.app/api",
        baseUrl:
            process.env.NODE_ENV === "production"
                ? "https://sports-facility-booking-platform-server-ten.vercel.app/api"
                : "http://localhost:5000/api",

        credentials: "include", // Include cookies with requests
    }),
    endpoints: (builder) => ({
        getFacilityById: builder.query({
            query: (id) => ({
                url: `/facility/${id}`,
                method: "GET",
            }),
        }),

        getFacility: builder.query({
            query: () => ({
                url: "/facility",
                method: "GET",
            }),
        }),

        postUserLogin: builder.mutation({
            // how do I get the response from the server
            query: (user) => ({
                url: "/auth/login",
                method: "POST",
                body: user,
            }),
        }),

        postUserRegister: builder.mutation({
            query: (user) => ({
                url: "/auth/signup",
                method: "POST",
                body: user,
            }),
        }),
    }),
});

export const {
    useGetFacilityByIdQuery,
    useGetFacilityQuery,
    usePostUserLoginMutation,
    usePostUserRegisterMutation,
} = baseApi;
