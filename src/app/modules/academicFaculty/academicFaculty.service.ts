import { AcademicFaculty } from "@prisma/client";
import prisma from "../../../shared/prisma";


const createFaculty = async(data:AcademicFaculty):Promise<AcademicFaculty>=> {
    const result= await prisma.academicFaculty.create({
        data
    })
    return result
}

const getAllFaculty = async():Promise<AcademicFaculty[]> =>{
    const result = await prisma.academicFaculty.findMany();
    return result;
} 

const getSingleFaculty = async(id:string) : Promise<AcademicFaculty | null> => {
    const result = await prisma.academicFaculty.findUnique({
        where: {
            id
        }
    })

    return result
}

const updateFaculty = async(id:string, data:AcademicFaculty):Promise<AcademicFaculty> => {
    const result = await prisma.academicFaculty.update({
        where: {
            id
        },
        data
    })
    return result;
}

const deleteFaculty = async(id:string): Promise<AcademicFaculty> => {
    const result = await prisma.academicFaculty.delete({
        where:{
            id
        }
    })
    return result;
}

export const academicFacultyService = {
    createFaculty,
    getAllFaculty,
    getSingleFaculty,
    updateFaculty,
    deleteFaculty
}