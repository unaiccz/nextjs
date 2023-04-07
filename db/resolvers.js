const Usuario = require('../models/Usuarios');
const resolvers = {


    Query : {


        getcurso : () => "hola"
    },
    Mutation : {
        nuevouser : async (_,{input}) => {
            const {email, password} = input;
            //revisar
 const exist  =  await Usuario.findOne({email});
 console.log(exist);
            if(exist){
                throw new Error('El usuario ya esta registrado');
            }
            //hash
            //guardar
        try {
const usuario = new Usuario(input);
usuario.save();
return usuario;
        } catch (error) {
            console.log(error);
        }
        }
    }
}
module.exports = resolvers