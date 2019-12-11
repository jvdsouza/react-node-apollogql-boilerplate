const { gql } = require('apollo-server'); 

const typeDefs = gql`
    #types go here
    type Book {
        title: String
        author: String
    }

    type Ping {
        pong: String
    }

    type Query {
        books: [Book]
        ping: Ping
    }
    
`

module.exports = typeDefs;