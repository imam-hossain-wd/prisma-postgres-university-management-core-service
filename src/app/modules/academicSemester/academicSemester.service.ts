import { AcademicSemester } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createSemester = async (
  data: AcademicSemester
): Promise<AcademicSemester> => {
  const result = await prisma.academicSemester.create({
    data,
  });
  return result;
};

const getAllSemester = async (options: any): Promise<AcademicSemester[]> => {
  const { page, limit, sortBy, sortOrder, searchTerm } = options;
  const semesterPage = parseInt(page);
  const semesterlimit = parseInt(limit);
  const skip = semesterlimit * semesterPage - semesterlimit || 0;
  const take = semesterlimit || 10;

  return await prisma.$transaction(async tx => {
    const result = await tx.academicSemester.findMany({
      skip,
      take,
      orderBy:
        sortBy && sortOrder
          ? {
              [sortBy]: sortOrder,
            }
          : { year: 'desc' },
      where: {
        OR: [
          {
            title: {
              contains: searchTerm,
              mode: 'insensitive',
            },
          },
          {
            year: {
              contains: searchTerm,
              mode: 'insensitive',
            },
          },
        ],
      },
    });
    return result;
  });
};

const getSingleSemester = async (
  id: string
): Promise<AcademicSemester | null> => {
  const result = await prisma.academicSemester.findUnique({
    where: {
      id,
    },
  });
  return result;
};
const updateSemester = async (
  id: string,
  data: Partial<AcademicSemester>
): Promise<AcademicSemester> => {
  const result = await prisma.academicSemester.update({
    where: {
      id,
    },
    data,
  });
  return result;
};
const deleteSemester = async (id: string): Promise<AcademicSemester> => {
  const result = await prisma.academicSemester.delete({
    where: {
      id,
    },
  });
  return result;
};

export const academicSemesterService = {
  createSemester,
  getAllSemester,
  getSingleSemester,
  updateSemester,
  deleteSemester,
};
