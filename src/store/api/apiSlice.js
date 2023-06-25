import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "book-store",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000/",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    addBooks: builder.mutation({
      query: (data) => ({
        url: "/books",
        method: "POST",
        body: data,
      }),
    }),
    updateBooks: builder.mutation({
      query: ({ book, id }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: book,
      }),
    }),
  }),
});

export const {
  useGetSingleBookQuery,
  useGetBooksQuery,
  useAddBooksMutation,
  useUpdateBooksMutation,
} = apiSlice;
