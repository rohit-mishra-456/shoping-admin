import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
 
const categoriesQueries = createApi({
    reducerPath: 'categories',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.VITE_APP_API_URL,
    }),
    endpoints: (build) => ({
        getcategories: build.query({
            query: () => ({ url: `categories?page=1&limit=10` }),
        }),
        getcategoriesById: build.query({
            query: (id) => ({ url: `categories?page=1&limit=10/${id}` }),
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
    useGetCategoriesQuery,
    useGetCategoriesByIdQuery,
} = categoriesQueries;