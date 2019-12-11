require('dotenv').config()

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./lib/typedefs');
const resolvers = require('./lib/resolvers');
//----data sources-----
const nodeRestAPI = require('./data-sources/node-API');

const server = new ApolloServer({ 
    typeDefs,
    dataSources: () => ({
        nodeRestAPI: new nodeRestAPI(),
    }),
    resolvers, 
});

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);  
})