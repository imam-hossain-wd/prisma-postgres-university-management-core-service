import { RequestHandler } from "express";
import catchAsync from "../../../shared/catchAsync";
import { academicDepartmentService } from "./academicDepartment.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";


const createDepartment:RequestHandler = catchAsync(async(req, res)=> {
    const data = req.body;
    const result = await academicDepartmentService.createDepartment(data);
    sendResponse(res, {
        statusCode:httpStatus.OK,
        success:true,
        message:"Create department successfully",
        data:result
    })
})
const getAllDepartment:RequestHandler = catchAsync(async(req, res)=> {
    const options = req.query;
    const result = await academicDepartmentService.getAllDepartment(options);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Retrived Department successfully",
        data: result
    })
})
const getSingleDepartment:RequestHandler = catchAsync(async(req, res)=> {
    const {id} = req.params;
    const result = await academicDepartmentService.getSingleDepartment(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Retrive Single Department successfully",
        data: result
    })
})
const updateDepartment:RequestHandler = catchAsync(async(req, res)=> {
    const data = req.body;
    const {id} = req.params;
    const result = await academicDepartmentService.updateDepartment(id,data);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Update Department successfully",
        data: result
    })
})
const deleteDepartment:RequestHandler = catchAsync(async(req, res)=> {
   const {id} = req.params;
    const result = await academicDepartmentService.deleteDepartment(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Create Department successfully",
        data: result
    })
})





export const academicDepartmentController ={
    createDepartment,
    getAllDepartment,
    getSingleDepartment,
    updateDepartment,
    deleteDepartment
}