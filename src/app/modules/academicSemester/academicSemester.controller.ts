import { RequestHandler } from "express";
import catchAsync from "../../../shared/catchAsync";
import { academicSemesterService } from "./academicSemester.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";



const createSemester:RequestHandler = catchAsync(async(req, res)=> {
    const data = req.body;
    const result = await academicSemesterService.createSemester(data);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Semester created successfully",
        data: result
    })
})

const getAllSemester:RequestHandler = catchAsync(async(req , res)=> {
    const result = await academicSemesterService.getAllSemester();
    sendResponse(res, {
        statusCode:httpStatus.OK,
        success:true,
        message:"Retrived all semester successfully",
        data:result
    })
})
const getSingleSemester:RequestHandler = catchAsync(async(req , res)=> {
    const {id}= req.params
    const result = await academicSemesterService.getSingleSemester(id);
    sendResponse(res, {
        statusCode:httpStatus.OK,
        success:true,
        message:"Retrived Single semester successfully",
        data:result
    })
})
const updateSemester:RequestHandler = catchAsync(async(req , res)=> {
    const {id}= req.params;
    const data = req.body;
    const result = await academicSemesterService.updateSemester(id, data);
    sendResponse(res, {
        statusCode:httpStatus.OK,
        success:true,
        message:"Semester Updated successfully",
        data:result
    })
})
const deleteSemester:RequestHandler = catchAsync(async(req , res)=> {
    const{id} =req.params;
    const result = await academicSemesterService.deleteSemester(id);
    sendResponse(res, {
        statusCode:httpStatus.OK,
        success:true,
        message:"Semester deleted successfully",
        data:result
    })
})


export const academicSemestercontroller = {
    createSemester,
    getAllSemester,
    getSingleSemester,
    updateSemester,
    deleteSemester
}