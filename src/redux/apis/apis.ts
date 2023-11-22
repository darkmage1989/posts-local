import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const postsApi = createApi({ //ртк запрос на апи
  reducerPath: "postsApi",
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
    getCommentsApi: builder.query({
      query: () => {
        return {
          url: `comments`,
        };
      },
    }),
  }),
});
export const { useGetPostsApiQuery, useGetCommentsApiQuery } = postsApi;
