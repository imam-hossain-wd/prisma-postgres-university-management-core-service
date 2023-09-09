import { RequestHandler } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { studentService } from "./student.service";


const createStudent:RequestHandler = catchAsync(async(req, res)=> {
    const data = req.body;
    const result = await studentService.createStudent(data);
    sendResponse(res, {
        statusCode:httpStatus.OK,
        success:true,
        message:"Create Student successfully",
        data:result
    })
})
const getAllStudent:RequestHandler = catchAsync(async(req, res)=> {
    const options = req.query;
    const result = await studentService.getAllStudent(options);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Retrived Student successfully",
        data: result
    })
})
const getSingleStudent:RequestHandler = catchAsync(async(req, res)=> {
    const {id} = req.params;
    const result = await studentService.getSingleStudent(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Retrive Single Student successfully",
        data: result
    })
})
const updateStudent:RequestHandler = catchAsync(async(req, res)=> {
    const data = req.body;
    const {id} = req.params;
    const result = await studentService.updateStudent(id,data);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Update Student successfully",
        data: result
    })
})
const deleteStudent:RequestHandler = catchAsync(async(req, res)=> {
   const {id} = req.params;
    const result = await studentService.deleteStudent(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Create Student successfully",
        data: result
    })
})





export const studentController ={
    createStudent,
    getAllStudent,
    getSingleStudent,
    updateStudent,
    deleteStudent
}