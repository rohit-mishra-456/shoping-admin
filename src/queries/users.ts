import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
 
const usersQueries = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.VITE_APP_API_URL,
    }),
    endpoints: (build) => ({
        getusers: build.query({
            query: () => ({ url: `users?page=1&limit=10` }),
        }),
        getusersById: build.query({
            query: (id) => ({ url: `users?page=1&limit=10/${id}` }),
        }),
        // updateOrder: build.mutation({
        //     query: (id, {data}) => ({ url: `post/${id}` }),
        // }),
        // deleteOrders: build.query({
        //     query: (id) => ({ url: `post/${id}` }),
        // }),
        // createOrders: build.query({
        //     query: (id) => ({ url: `post/${id}` }),
        // }),
    }),
})
 
export const {
    useGetUsersQuery,
    useGetUsersByIdQuery,
} = usersQueries;