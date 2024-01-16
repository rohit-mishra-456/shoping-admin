import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
 
const dashboardQueries = createApi({
    reducerPath: 'dashboards',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.VITE_APP_API_URL,
    }),
    endpoints: (build) => ({
        getdashboard: build.query({
            query: () => ({ url: `dashboard` }),
        }),
        getdashboardById: build.query({
            query: (id) => ({ url: `dashboard/${id}` }),
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
    useGetDashboardQuery,
    useGetDashboardByIdQuery,
} = dashboardQueries;