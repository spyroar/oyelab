const express = require('express')
 require('dotenv').config()
const router = require('./routes/userRoutes')
const {connectDB} = require('./db/dbconnection')
const cors=require('cors')
   connectDB();
const app = express()
const port = process.env.PORT ||3001
app.use(express.json());
app.use(cors())
app.use('/api',router)

app.listen(port, () => console.log(`Port is listening on ${port}!`))