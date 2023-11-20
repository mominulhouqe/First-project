import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    const result = await StudentServices.createStudentIntoDB(studentData);

    res.status(200).json({
      success: true,
      message: 'student is created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'students is getting successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingelStudent = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.studentId;

    const result = await StudentServices.getSingelStudent(studentId);
    res.status(200).json({
      success: true,
      message: 'Singel Student getting successfull',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingelStudent,
};
