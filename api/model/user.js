import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

// todo : add unique key to email field
const schema = new mongoose.Schema({
    email: { type: String, required: true, lowercase: true, index: true },
    passwordHash: { type: String, required: true }

}, { timestamps: true })




// this.passwordHash is the password hash in the database
schema.methods.isValidPassword = function isValidPassword(password){
    return bcrypt.compareSync(password, this.passwordHash)
}


export default mongoose.model('User', schema)