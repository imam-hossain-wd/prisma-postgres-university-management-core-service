import { RequestHandler } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { facultyService } from "./faculty.service";



const createFaculty:RequestHandler = catchAsync(async(req, res)=> {
    const data = req.body;
    const result = await facultyService.createFaculty(data);
    sendResponse(res, {
        statusCode:httpStatus.OK,
        success:true,
        message:"Create Faculty successfully",
        data:result
    })
})
const getAllFaculty:RequestHandler = catchAsync(async(req, res)=> {
    const result = await facultyService.getAllFaculty();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Retrived Faculty successfully",
        data: result
    })
})
const getSingleFaculty:RequestHandler = catchAsync(async(req, res)=> {
    const {id} = req.params;
    const result = await facultyService.getSingleFaculty(id);
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
    const result = await facultyService.updateFaculty(id,data);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Update Faculty successfully",
        data: result
    })
})
const deleteFaculty:RequestHandler = catchAsync(async(req, res)=> {
   const {id} = req.params;
    const result = await facultyService.deleteFaculty(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Create Faculty successfully",
        data: result
    })
})





export const facultyController ={
    createFaculty,
    getAllFaculty,
    getSingleFaculty,
    updateFaculty,
    deleteFaculty
}