import { RequestHandler } from "express";
import catchAsync from "../../../shared/catchAsync";
import { academicFacultyService } from "./academicFaculty.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";


const createFaculty:RequestHandler = catchAsync(async(req, res)=> {
    const data = req.body;
    const result = await academicFacultyService.createFaculty(data);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Create Faculty successfully",
        data: result
    })
})
const getAllFaculty:RequestHandler = catchAsync(async(req, res)=> {
    const result = await academicFacultyService.getAllFaculty();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Retrived Faculty successfully",
        data: result
    })
})
const getSingleFaculty:RequestHandler = catchAsync(async(req, res)=> {
    const {id} = req.params;
    const result = await academicFacultyService.getSingleFaculty(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Retrive Single Faculty successfully",
        data: result
    })
})
const updateFaculty:RequestHandler = catchAsync(async(req, res)=> {
    const data = req.body;
    const {id} = req.params;
    const result = await academicFacultyService.updateFaculty(id,data);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Update Faculty successfully",
        data: result
    })
})
const deleteFaculty:RequestHandler = catchAsync(async(req, res)=> {
   const {id} = req.params;
    const result = await academicFacultyService.deleteFaculty(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Create Faculty successfully",
        data: result
    })
})





export const academicFacultyController ={
    createFaculty,
    getAllFaculty,
    getSingleFaculty,
    updateFaculty,
    deleteFaculty
}