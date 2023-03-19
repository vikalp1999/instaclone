require("dotenv").config();
const express= require("express");
const cors= require("cors");
const connect = require("./src/config/db");
const cookieParser = require('cookie-parser')
const { ExpressPeerServer } = require('peer')
const path = require('path')


const PORT= process.env.PORT;


const app= express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', require('./src/routes/authRouter'))
app.use('/api', require('./src/routes/userRouter'))
app.use('/api', require('./src/routes/postRouter'))
app.use('/api', require('./src/routes/commentRouter'))
app.use('/api', require('./src/routes/notifyRouter'))
app.use('/api', require('./src/routes/messageRouter'))


app.listen(PORT,async()=>{
    await connect();
    console.log(`listening at http://localhost:${PORT}`)
})
