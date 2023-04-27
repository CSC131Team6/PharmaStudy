import { createVendiaClient } from "@vendia/client";
//import React from 'react'

const client = createVendiaClient({
    apiUrl: `https://sj8amu1vyd.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://4i96wut3tg.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey: `HCoPERionv96SSzjCAzK6pPgPJgZnaimXbvLua13A8LB`, // <---- API key
})

const { entities } = client;

const useFDA = () => {
    return { entities };
};

export default useFDA;
