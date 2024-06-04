
import User from "@/app/api/dto/User";
import {PrismaClient} from "@prisma/client";
import Swag from "@/app/api/dto/Swag";

const prisma = new PrismaClient()

export default class SwagService {
     async addSwag(swag: Swag) {
        return  prisma.swag.create({
            data: {
                name: swag.name,
                phone: swag.phone,
                email: swag.email,
                company: swag.company,
                position: swag.position,
                feedback: swag.feedback,
                createdAt: new Date(),
                event: swag.event

            }
        })
    }

    async getSwags()  {
        return await prisma.swag.findMany()
    }

}
