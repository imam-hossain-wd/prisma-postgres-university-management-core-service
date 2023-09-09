import { Router } from "express";
import { facultyController } from "./faculty.controller";


const router = Router();

router.post('/create-faculty', facultyController.createFaculty);
router.get('/', facultyController.getAllFaculty);
router.get('/:id', facultyController.getSingleFaculty)
router.patch('/:id', facultyController.updateFaculty)
router.delete('/:id', facultyController.deleteFaculty)

export const facultyRoutes = router;