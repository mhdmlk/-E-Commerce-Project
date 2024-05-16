const express = require("express")
//cors - cross origin register resource
//frontend defferent port and vackend deffernt port
const RunServer = require("./database/connection")
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')
const productRoute = require("./routes/productRoute")
const app = express()
const paymentRoutes = require('./routes/paymentRoutes')
const cookieParser = require("cookie-parser")
const morgan = require("morgan")
const helmet = require("helmet")

const port = 3000

app.use(cors())
app.use('/api/v1/user', userRoutes)
app.use('/api/v1', productRoute)
app.use('/api/v1/payment', paymentRoutes)
RunServer()

app.use(express.json())
app.use(helmet())
app.use(cors({
    //We are allowing cross origin resource 
    origin: "http://localhost:5173",
    //this line will allow frontend to send cookies to backend
    credentials: true
}))
app.use(morgan('dev'))
//we are using the cookie parser middleware here
app.use(cookieParser())


app.listen(port, () => {
    console.log(`server is running on ${port}`)
})