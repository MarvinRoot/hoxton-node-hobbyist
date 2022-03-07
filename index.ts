import express from 'express'
import cors from 'cors'

import { PrismaClient } from '@prisma/client'

const app = express()
app.use(cors())
app.use(express.json())

const prisma = new PrismaClient()

app.get('/users', async (req,res) => {
    const users = await prisma.user.findMany({include: {hobby: true}})
    res.send(users)
})

app.listen(4001, () => {
    console.log('Server up: http://localhost:4001');
})