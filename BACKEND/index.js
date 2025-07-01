const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const cors = require('cors')


const userRoute = require('./routes/userRoutes')
const bookRoute = require('./routes/bookRoute')


const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
dotenv.config()


const port = process.env.PORT || 4000
const URI = process.env.MONGODB_URI
//connect to mongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Connected to DB');
    
    
} catch (error) {
    console.log("Error: ", error)
}

app.use("/book", bookRoute)
app.use("/user", userRoute)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})