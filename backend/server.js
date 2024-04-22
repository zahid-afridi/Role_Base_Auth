import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieparser from 'cookie-parser'
import DbCon from './utlis/db.js'
import AuthRoutes from './routes/Auth.js'
import AdminRoutes from './routes/AdminRoutes.js'
dotenv.config()
const PORT=process.env.PORT || 3000
const app=express()

// mongo db 
DbCon()
app.use(express.json())
app.use(cookieparser())
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'  
}));

app.use('/api/auth',AuthRoutes)
app.use('/api/admin',AdminRoutes)

app.get('/',(req,res)=>{
    res.send('test')
})

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})