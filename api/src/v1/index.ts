import express from "express"
import usersRouter from './users'
import collectiblesRouter from './collectibles'
const router = express.Router()

router.use('/users', usersRouter)
router.use('/collectibles', collectiblesRouter)

export default router