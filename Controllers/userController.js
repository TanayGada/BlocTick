const User = require('../models/userModel.js');
const jwt = require('jsonwebtoken');

const createToken = (_id)=>{
    return jwt.sign({_id}, process.env.JWT_SECRET, {expiresIn: '1d'});
}

//login User
const loginUser = async (req, res) => {

    const{email,password} = req.body;

    try {
      const user = await User.login(email, password)

      //create a token
      const token = createToken(user._id)

      res.status(200).json({ email, token })
    } catch (err) {
      res.status(400).json({ error: err.message })
    }



}

//signup User
const signupUser = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.signup(email,password)

        //create a token
        const token = createToken(user._id);

        res.status(200).json({email,token});
    }catch(err){
        res.status(400).json({error: err.message});
    }

}

module.exports = {loginUser, signupUser};