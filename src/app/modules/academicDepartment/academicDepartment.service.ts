import { AcademicDepartment } from "@prisma/client";
import prisma from "../../../shared/prisma";


const createDepartment = async(data:AcademicDepartment):Promise<AcademicDepartment> => {
    const result = await prisma.academicDepartment.create({
        data
    })
    return result
}
const getAllDepartment = async(options:any):Promise<AcademicDepartment[]> =>{

    const {limit, page} = options;
    const skip = parseInt(limit) * parseInt(page) - parseInt(limit);
    const take = parseInt(limit);
    return await prisma.$transaction(async(tx)=> {
        const result = await tx.academicDepartment.findMany()
        return result;
    })

} 

const getSingleDepartment = async(id:string) : Promise<AcademicDepartment| null> => {
    const result = await prisma.academicDepartment.findUnique({
        where: {
            id
        }
    })

    return result
}

const updateDepartment = async(id:string, data:AcademicDepartment):Promise<AcademicDepartment> => {
    const result = await prisma.academicDepartment.update({
        where: {
            id
        },
        data
    })
    return result;
}

const deleteDepartment = async(id:string): Promise<AcademicDepartment> => {
    const result = await prisma.academicDepartment.delete({
        where:{
            id
        }
    })
    return result;
}

export const academicDepartmentService ={
    createDepartment,
    getAllDepartment,
    getSingleDepartment,
    updateDepartment,
    deleteDepartment
}