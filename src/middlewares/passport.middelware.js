//Nos ayuda a prorteger la ruta...
const passport = require("passport");
const { findUserById } = require("../users/users.controllers");
//Es la forma de como vamos a proteger la ruta...
const JwtStrategy = require('passport-jwt').Strategy;
//Es la forma de como vamos a obtener el token del usuarioque hace la peticion.
const ExtractJwt = require('passport-jwt').ExtractJwt;

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'Ac4d3ml0vers'

}

//Aqui vamos a validar si el usuario existe.
passport.use(new JwtStrategy(options, (tokenDecoded, done) => {
    //!Done recibe el error y el usuario...
    
    //?Casos que vamos a utilizar..

    //*done(null, false)
    //*done(error, false)
    //*done(null, user) caso de exito.

    findUserById(tokenDecoded.id)
        .then(user => {
            if(user){
                done(null, user)
            } else {
                done(null, false)
            }
        })
        .catch((err) => {
            done(err, false)
        })
}))

module.exports = passport

