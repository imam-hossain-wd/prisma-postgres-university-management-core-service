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
        meta: result.count,
        data:result
    })
})


export const academicSemestercontroller = {
    createSemester,
    getAllSemester
}