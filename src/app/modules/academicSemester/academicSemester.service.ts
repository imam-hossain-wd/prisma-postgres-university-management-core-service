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
const getSingleSemester = async (id:string):Promise<AcademicSemester | null>=>{
    const result = await prisma.academicSemester.findUnique({
        where : {
            id
        }
    });
    return result
} 
const updateSemester = async (id:string, data:Partial<AcademicSemester>):Promise<AcademicSemester>=>{
    const result = await prisma.academicSemester.update({
        where : {
            id
        },
        data
    });
    return result
} 
const deleteSemester = async (id:string):Promise<AcademicSemester>=>{
    const result = await prisma.academicSemester.delete({
        where : {
            id
        }
    });
    return result
} 


export const academicSemesterService = {
    createSemester,
    getAllSemester,
    getSingleSemester,
    updateSemester,
    deleteSemester
}