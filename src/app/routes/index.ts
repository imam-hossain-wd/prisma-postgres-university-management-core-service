import express from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';
import { academicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route';
import { studentRoutes } from '../modules/student/student.route';
import { facultyRoutes } from '../modules/faculty/faculty.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: "/academic-semester",
    routes: AcademicSemesterRoutes
  },
  {
    path: "/academic-faculty",
    routes: AcademicFacultyRoutes
  },
  {
    path: "/academic-department",
    routes: academicDepartmentRoutes
  },
  {
    path: "/student",
    routes: studentRoutes
  },
  {
    path: "/faculty",
    routes: facultyRoutes
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
