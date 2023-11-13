import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const myApi = createApi({
    reducerPath:'myApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com/'}),
       endpoints:(builder) =>({
         getAllData : builder.query({
            query:()=> `posts`,
            method:'GET'
        }),
        getDataById : builder.query({
            query:(id) => ({
                url: `posts/${id}`,
                method:'GET'
            }),
            
          }),
          deleteData:builder.mutation({
            query:(id) => ({
                url: `posts/${id}`,
                method:'DELETE'
            }),
            
          }),

          createData:builder.mutation({
            query:() => ({
                url: `posts`,
                method:'POST',
                headers:{
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }),
            
          }),
    }),

  


})


export const { useGetAllDataQuery, useGetDataByIdQuery,
    useDeleteDataMutation, useCreateDataMutation } = myApi;
