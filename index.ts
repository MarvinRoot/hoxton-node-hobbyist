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

app.get('/hobbies', async (req,res) => {
    const hobbies = await prisma.hobby.findMany({include: {user: true}})
    res.send(hobbies)
})

app.post('/users', async (req,res) => {
    const { fullName, photoUrl, email, hobbies = [] } = req.body

  const newUser = await prisma.user.create({
    data: {
      fullName,
      photoUrl,
      email,
      hobby: {
        // an array of {where, create} data for hobbies
        connectOrCreate: hobbies.map((hobby: any) => ({
          // try to find the hobby if it exists
          where: { name: hobby.name },
          // if it doesn't exist, create a new hobby
          create: hobby
        }))
      }
    },
    include: {
      hobby: true
    }
  })
  res.send(newUser)
})

app.delete('/users', async (req,res) => {
    const {email} = req.body

    const user = await prisma.user.delete({
        where: {email: email}
    })

    res.send(user)
})

app.patch('/users', async (req,res) => {
    const{email, hobby} = req.body

    const updatedUser = await prisma.user.update({
        where: {email: email},
        data: {
            hobby: {
                connectOrCreate: {
                    where: {name: hobby.name},
                    create: hobby
                }
            }
        }
    })
    res.send(updatedUser)
})

app.get('/users/:id', async (req,res) => {
    const id = Number(req.params.id)

    const user = await prisma.user.findUnique({
        where: {id: id},
        include: {hobby: true}
    })
    res.send(user)
})

app.listen(4001, () => {
    console.log('Server up: http://localhost:4001');
})