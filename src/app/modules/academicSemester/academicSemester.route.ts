import { Router } from "express";
import { academicSemestercontroller } from "./academicSemester.controller";


const router = Router();

router.post('/create-semester', academicSemestercontroller.createSemester);
router.get('/', academicSemestercontroller.getAllSemester);
router.get('/:id', academicSemestercontroller.getSingleSemester);
router.patch('/:id', academicSemestercontroller.updateSemester);
router.delete('/:id', academicSemestercontroller.deleteSemester);


export const AcademicSemesterRoutes = router;