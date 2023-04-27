import { createVendiaClient } from "@vendia/client";
//import React from 'react'

const client = createVendiaClient({
    apiUrl: `https://vuvqv9eet4.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://4g338owjxg.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey: `cunAPnr3fvXNEzwHfqm7d1gS9bCgri99uaqSz4PvJFm`, // <---- API key
  })

const {entities} = client;

const useBavaria = () => {
    return {entities};
};

export default useBavaria;
