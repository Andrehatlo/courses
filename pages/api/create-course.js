import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

module.exports = async (req, res) => {
    // await prisma.course.create({
    //     data: {
    //         title: 'Learning to Invest!',
    //         lessons: {
    //             create: { title: 'Learning to use the Crypto Market Cap'},
    //         },
    //     },
    // });
    // const courses = await prisma.course.findMany({
    //     include: {
    //       lessons: true,
    //     },
    // })
    res.send('this is only here as a guide')
}