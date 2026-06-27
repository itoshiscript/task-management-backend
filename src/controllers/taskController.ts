import { Request, Response } from "express";
import {createTask} from "../models/taskModel";

export const store = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
        const {title, description, categoryId} = req.body;

        if(!userId) {
            return res.status(401).json({
                status: "error",
                message: "User not authenticated",
            })
        }

        const task = await createTask({title, description, categoryId, userId});

        return res.status(201).json({
            status: "success",
            data: task,
        })


    }catch (error : unknown) {
        if(error instanceof Error) {
            return res.status(500).json({
                status: "error",
                message: error.message,
            })
        }
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error",
        })
    }
}