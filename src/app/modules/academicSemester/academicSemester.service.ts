import { AcademicSemester } from "@prisma/client";
import prisma from "../../../shared/prisma";


const createSemester = async (data:AcademicSemester): Promise<AcademicSemester> => {
    const result = await prisma.academicSemester.create({
        data
    })
    return result;
}

const getAllSemester = async ():Promise<AcademicSemester []>=>{
    const result = await prisma.academicSemester.findMany();
    return result
} 


export const academicSemesterService = {
    createSemester,
    getAllSemester
}