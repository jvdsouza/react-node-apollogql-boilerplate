const books = require('./mock-api/books');

const resolvers = {
    Query: {
      books: () => books,
      ping: (_, __, { dataSources }) => {
        console.log(dataSources);
        return dataSources.nodeRestAPI.fetchPingResolver();
      }
    },
  };

module.exports = resolvers;