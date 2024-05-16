const user = require("../models/user")
const bcryptjs = require('bcryptjs')
const jwt = require("jsonwebtoken")

const Login = async (req, res) => {
    const body = req.body
    const findUser = await user.findOne({ email: body.email })
    //comparing the hashedpassword with raw  password which user is sending in body.password
    const comparePassword = await bcryptjs.compare(body.password, findUser.password)
    if (!comparePassword) {
        return res.status(401).json({ errorMessage: "Invalid Password" })
    }
    //<!-- we are creating token using jsonwebtoken -->
    const token = jwt.sign({ userId: findUser._id }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    })
    //<!-- we are sending the token to the frontend in form of cookie-->
    res.cookie('auth-token', token, {
        //<!-- cookie exipre time -->
        httpOnly: true,   //used for http only.
        secure: false,    //if you are using https then uh must make it true.
        maxAge: 86400000, //expire time in milliseconds
    })
    res.send({ message: "success", data: findUser })
}


// ----------------------------------------------------

const Register = async (req, res) => {
    //data which we getting from user in req.body
    const body = req.body
    const hashedpassword = await bcryptjs.hash(req.body.password, 10)
    const saveData = await user.create({
        username: body.username,
        email: body.email,
        //saving the hashed password
        password: hashedpassword
    })// saves in mongo database
    res.send({ message: "success again", data: saveData })//sending back the user data to react
}
const Logout = async (req, res) => {
    res.cookie("auth-token", "", {
        expires: new Date(0),
        httpOnly: true,
        secure: false,
        maxAge: 0,
    })

    res.status(200).json({ message: 'Logging out' })
}
module.exports = {
    Login,
    Register
}


