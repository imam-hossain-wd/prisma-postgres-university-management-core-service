import { Router } from "express";
import { academicSemestercontroller } from "./academicSemester.controller";


const router = Router();

router.post('/create-semester', academicSemestercontroller.createSemester);


export const AcademicSemesterRoutes = router;