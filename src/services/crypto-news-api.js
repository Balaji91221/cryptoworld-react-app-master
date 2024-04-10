import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoNewsApiHeaders ={
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Key': '0d8c64506fmshea4fffa31705cd3p1aec35jsn769ed73517f9',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl ="https://bing-news-search1.p.rapidapi.com"

const createRequest = (url) => ({
    url,
    headers:cryptoNewsApiHeaders
})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
      getCryptoNews: builder.query({
        query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
      }),
    }),
  });


export const {useGetCryptoNewsQuery} = cryptoNewsApi