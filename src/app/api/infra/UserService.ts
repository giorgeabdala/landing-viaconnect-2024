
import User from "@/app/api/dto/User";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

export default class UserService {
     async addUser(user: User) {
        return  prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                birthday: user.birthday,
                occupation: user.occupation,
                whatsapp: user.whatsapp,
                createdAt: new Date(),
                event: user.event

            }
        })
    }

    async getUsers()  {
        return await prisma.user.findMany()
    }

}
