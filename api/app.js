import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import './db.js'
const app=express()

//middlewares

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


//server
const PORT=3000

app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`)
})