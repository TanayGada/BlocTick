const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const validator = require('validator');

const userSchema = new Schema({

    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }

})


// Static SignUp method
userSchema.statics.signup = async function(email, password) {

    //validation
    if(!email || !password){
        throw Error('Email and Password are required');
    }

    if(!validator.isEmail(email)){
    
        throw Error('Email is not valid');
    }

    if(!validator.isStrongPassword(password)){
        throw Error('Password is not strong');
    }

    const exists = await this.findOne({email})

    if(exists){
        throw Error('Email already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({email, password: hash});
    return user;

}

//static login method
userSchema.statics.login = async function(email, password) {


   if (!email || !password) {
     throw Error('Email and Password are required')
   }

    const user = await this.findOne({email});

    if(!user){
        throw Error('Incorrect Email')
    }

        const match = await bcrypt.compare(password, user.password);

        if(match){
            return user;
        }
        throw Error('Incorrect Password');
    
}



module.exports = mongoose.model('User', userSchema);