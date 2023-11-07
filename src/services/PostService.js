import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
        endpoints: (build) => ({
        fetchAllPosts: build.query({
            query: ( page = 3) => ({
                url: 'posts',
                params: {
                    _limit: 10,
                    _page: page,
                },
            }),
        }),
        FetchPostById: build.query({
            query: (id) => ({
                url: `posts/${id}`
            })
        }),
    })
})

export const { useFetchAllPostsQuery, useFetchPostByIdQuery } = postAPI;


