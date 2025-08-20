import prisma from "../prisma"
import { Prisma } from "../generated/prisma-client";
import { cache } from "react";

type User = {
    email: string;
    password: string;
    userName?: string;
}

export const SignInUser = cache(async function SignInUser(data: User): Promise<User | undefined> {
    const user = await prisma.user.findUnique({
        where: { email: data.email }
    })

    if (!user) {
        throw new Error("User not found!")
    }

    if (data.password !== user.password) {
        throw new Error("Password incorrect!")
    }

    return user;
})

export async function CreateUser(data: Prisma.UserCreateInput): Promise<Prisma.UserCreateInput> {
    const user = await prisma.user.create({ data })

    return user
}

export const GetUser = cache(async function GetUser(userName: string) {
    const user = await prisma.user.findFirst({
        where: { 
            userName: {
                equals: userName,
                mode: 'insensitive'
            }
        },
        include: { posts: true }
    })

    return user
})