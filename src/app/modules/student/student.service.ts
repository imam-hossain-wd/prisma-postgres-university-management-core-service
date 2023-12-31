import { Student } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createStudent = async (data: Student): Promise<Student> => {
  const result = await prisma.student.create({
    data,
  });
  return result;
};
const getAllStudent = async (options: any): Promise<Student[]> => {
  // const {limit, page} = options;
  // const skip = parseInt(limit) * parseInt(page) - parseInt(limit);
  // const take = parseInt(limit);
  const result = await prisma.student.findMany();
  return result;
};

const getSingleStudent = async (id: string): Promise<Student | null> => {
  const result = await prisma.student.findUnique({
    where: {
      id,
    },
  });

  return result;
};

const updateStudent = async (id: string, data: Partial<Student>): Promise<Student> => {
  const result = await prisma.student.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

const deleteStudent = async (id: string): Promise<Student> => {
  const result = await prisma.student.delete({
    where: {
      id,
    },
  });
  return result;
};

export const studentService = {
  createStudent,
  getAllStudent,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
