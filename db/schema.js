const { gql } = require('apollo-server');

const typedefs = gql`
type Usuario {
    id: ID
    name: String
    email: String
    password: String
    creado: String
}
type Query {

    getcurso : String
}
type Mutation {
    nuevouser : String
}

`;
module.exports = typedefs