import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const dataApi = createApi({ //ртк запрос на апи
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPostsApi: builder.query({
      query: () => {
        return {
          url: `posts`,
        };
      },
    }),
    getUsersApi: builder.query({
      query: () => {
        return {
          url: `users`,
        };
      },
    }),
    getCommentsApi: builder.query({
      query: () => {
        return {
          url: `comments`,
        };
      },
    }),
  }),
});
export const { useGetPostsApiQuery, useGetUsersApiQuery, useGetCommentsApiQuery } = dataApi;
