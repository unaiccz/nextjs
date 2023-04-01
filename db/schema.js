const { gql } = require('apollo-server');

const typedefs = gql`
type Usuario {
    nombre : String
    email : String
    password : String
    creado : String
type Query {

    getcurso: String
}
type Mutation {
    nuevouser : Usuario

`;
module.exports = typedefs