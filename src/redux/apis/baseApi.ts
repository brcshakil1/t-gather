import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { RootState } from "../store";

// const baseQuary = fetchBaseQuery({
//   baseUrl: `http://localhost:5000/api/v1`,
//   credentials: "include",
//   prepareHeaders: (headers, { getState }) => {
//     const token = (getState() as RootState).auth.token;

//     if (token) {
//       headers.set("authorization", `${token}`);
//     }
//     return headers;
//   },
// });

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getUserToken: builder.query({
      query: () => ({
        url: `/auth/users`,
      }),
    }),
    loginUser: builder.mutation({
      query: (userInfo) => {
        console.log(userInfo);
        return {
          url: `/auth/login`,
          method: "POST",
          body: userInfo,
        };
      },
    }),
  }),
});

export const { useGetUserTokenQuery, useLoginUserMutation } = baseApi;
