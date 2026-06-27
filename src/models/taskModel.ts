import {prisma} from "../lib/prisma";

interface CreateTask {
    title: string;
    description?: string;
    categoryId?: number;
    userId: number;
}

export const createTask = async (newTask: CreateTask) => {
    const task = await prisma.task.create({data: newTask})
    return task;
}

export const getAllTasks = async (userId : number) => {
    return prisma.task.findMany({where: {userId}});
}