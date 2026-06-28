import {prisma} from "../lib/prisma";

interface CreateTask {
    title: string;
    description?: string;
    categoryId?: number;
    userId: number;
}

export const createTask = async (newTask: CreateTask) => {
    return prisma.task.create({data: newTask})
}

export const getAllTasks = async (userId : number) => {
    return prisma.task.findMany({
        where: {
            userId
        }, include: {
            category: true
        }, orderBy: {
            createdAt: 'desc'
        }
    });
}

export const getTaskById = async (id: number, userId: number) => {
    return prisma.task.findFirst({
        where: {
            id,
            userId
        }
    })
}