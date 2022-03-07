import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const users = [
    {
        fullName: 'Marvin Aliaj',
        photoUrl: 'marvin.jpeg',
        email: 'marvin@email.com',
        hobby: {create: [
            {
                name: 'Playing basketball', 
                imageUrl: 'basket.jpeg',
                active: true
            },
            {
                name: 'Drawing',
                imageUrl: 'drawing.jpeg',
                active: false
            }
        ]}
    },
    {
        fullName: 'LeBron James',
        photoUrl: 'lebron.jpeg',
        email: 'lebron@email.com',
        hobby: {create: [
            {
                name: 'Listening to music',
                imageUrl: 'music.jpeg',
                active: false
            }
        ]}
    }
]

async function createTable() {
    for(const user of users) {
        await prisma.user.create({ data: user })
    }
}

createTable()