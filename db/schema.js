const { gql } = require('apollo-server');

const typedefs = gql`
type Query {

    getcurso : String
}

`;
module.exports = typedefs