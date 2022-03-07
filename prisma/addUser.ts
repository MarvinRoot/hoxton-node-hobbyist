import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function createUser() {
    await prisma.user.create({
        data: {
            fullName: 'Nicolas Marcora',
            photoUrl: 'nicolas.jpeg',
            email: 'nicolas@email.com',
            hobby: {
                connect: {
                    name: 'Drawing'
                }
            }
        }
    })
}

createUser()