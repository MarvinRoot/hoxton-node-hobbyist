import express from 'express'
import cors from 'cors'

import { PrismaClient } from '@prisma/client'

const app = express()
app.use(cors())
app.use(express.json())

const prisma = new PrismaClient()

app.get('/users', async (req,res) => {
    const users = await prisma.user.findMany()
    res.send(users)
})

app.listen(4000, () => {
    console.log('Server up: http://localhost:4000');
})