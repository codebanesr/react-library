var mongoose = require('mongoose')
var bcrypt = require('bcrypt')

// todo : add unique key to email field
const schema = new mongoose.Schema({
    email: { type: String, required: true, lowercase: true, index: true },
    passwordHash: { type: String, required: true }

}, { timestamps: true })




// this.passwordHash is the password hash in the database
schema.methods.isValidPassword = function isValidPassword(password){
    console.log(bcrypt.compareSync(password, this.passwordHash))
    return bcrypt.compareSync(password, this.passwordHash);
}


schema.methods.toAuthJSON = function toAuthJSON() {
    return {
        email: this.email,
        token: this.generateJWT()
    }
}

schema.methods.generateJWT = function generateJWT(){
    return jwt.sign({
        email: this.email
    }, process.env.JWT_SECRET)
}

module.exports = mongoose.model('User', schema)