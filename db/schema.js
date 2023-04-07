const { gql } = require('apollo-server');

const typedefs = gql`
type Usuario {
    id: ID
    nombre: String
    email: String
    creado: String
}
input usuarioInput {
    nombre: String!
    email: String!
    password: String!

}
type Query {

    getcurso : String
}
type Mutation {
    nuevouser(input: usuarioInput) : Usuario
}

`;
module.exports = typedefs