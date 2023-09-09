import { Router } from "express";
import { academicDepartmentController } from "./academicDepartment.controller";



const router = Router();
router.post('/create-department', academicDepartmentController.createDepartment)
router.get('/', academicDepartmentController.getAllDepartment)
router.get('/:id', academicDepartmentController.getSingleDepartment)
router.patch('/:id', academicDepartmentController.updateDepartment)
router.delete('/:id', academicDepartmentController.deleteDepartment)


export const academicDepartmentRoutes = router;