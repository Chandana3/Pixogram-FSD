let passport = require("passport");
let JwtStrategy = require("passport-jwt").Strategy;

const jwtOptions = require('./jwt-options');


module.exports = function (cb) {
    const strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {

        console.log('payload received', jwt_payload);
         var isValid = true;
        if(isValid){
            next(null, {name: "Mark carl", age: 45, role: "admin"});
        } else {
            next(null, false);
        }

    })

    passport.use(strategy);
    cb(passport);
}
