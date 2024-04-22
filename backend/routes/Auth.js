import express from 'express'
import { CheckUser, Login, Logout, register } from '../controllers/Auth.js'
import {IsUser} from '../middleware/verifyToken.js'
const AuthRoutes=express.Router()

AuthRoutes.post('/register',register)
AuthRoutes.post('/login',Login)
AuthRoutes.post('/logout',Logout)
AuthRoutes.get('/CheckUser',IsUser,CheckUser)

export default AuthRoutes