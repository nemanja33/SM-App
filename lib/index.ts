import prisma from "./prisma";

type User = {
    email: string;
    password: string;
}

export async function GetUser(userData: User) {
    const user = await prisma.user.findUnique({
        where: { email: userData.email }
    })

    if (!user) {
        console.log('not found!')
        return
    }

    if (userData.password !== user.password) {
        console.log('wrong password!')
        return
    }

    return user;
}