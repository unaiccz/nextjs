const {ApolloServer} = require('apollo-server');
const resolvers = require('./db/resolvers');
const typeDefs = require('./db/schema');
const connectDB = require ('./db/config/db')
connectDB()
//connect to db
//connectDB();
//server

console.log("Starting the server")

const server = new ApolloServer({typeDefs, resolvers});
//start
server.listen().then(({url})=>{

    console.log(`server at ${url}`)
})