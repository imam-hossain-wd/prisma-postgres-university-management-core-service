import { Router } from "express";
import { academicFacultyController } from "./academicFaculty.controller";


const router = Router();

router.post('/create-faculty',  academicFacultyController.createFaculty);
router.get('/', academicFacultyController.getAllFaculty)
router.get('/:id', academicFacultyController.getSingleFaculty)
router.patch('/:id', academicFacultyController.updateFaculty)
router.delete('/:id', academicFacultyController.deleteFaculty)

export const AcademicFacultyRoutes = router;