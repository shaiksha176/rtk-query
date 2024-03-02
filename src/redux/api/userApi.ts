import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  tagTypes: ["users"],
  endpoints: (builder) => ({
    getUsers: builder.query<void, void>({
      query: () => "/users",
      // providesTags: ["users"],
      transformResponse: (response: any) => {
        return response.users;
      },
    }),
    getUserById: builder.query<any, any>({
      query: (id) => `/users/${id}`,
    }),
    addUser: builder.mutation({
      query: (body) => ({
        url: "/users/add",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      }),
      // invalidatesTags: ["users"],
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useAddUserMutation,
  useLoginMutation,
  useLazyGetUserByIdQuery,
  useLazyGetUsersQuery,
} = userApi;
