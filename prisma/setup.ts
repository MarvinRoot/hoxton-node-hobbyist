import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const users = [
    {
        fullName: 'Marvin Aliaj',
        photoUrl: 'marvin.jpeg',
        email: 'marvin@email.com',
        hobby: { connect: [{name: 'Playing basketball'}, {name: 'Drawing'}]}
    },
    {
        fullName: 'LeBron James',
        photoUrl: 'lebron.jpeg',
        email: 'lebron@email.com',
        hobby: { connect: {name: 'Listening to music'}}
    }
]

const hobbies = [
    {
        name: 'Playing basketball', 
        imageUrl: 'basket.jpeg',
        active: true
    },
    {
        name: 'Drawing',
        imageUrl: 'drawing.jpeg',
        active: false
    },
    {
        name: 'Listening to music',
        imageUrl: 'music.jpeg',
        active: false
    }
]

async function createTable() {
    for(const user of users) {
        await prisma.user.create({ data: user })
    }

    for(const hobby of hobbies) {
        await prisma.hobby.create({ data: hobby })
    }
}

createTable()