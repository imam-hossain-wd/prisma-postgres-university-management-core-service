import { Router } from "express";
import { studentController } from "./student.controller";


const router = Router();

router.post('/create-student', studentController.createStudent);
router.get('/', studentController.getAllStudent);
router.get('/:id', studentController.getSingleStudent)
router.patch('/:id', studentController.updateStudent)
router.delete('/:id', studentController.deleteStudent)

export const studentRoutes = router;