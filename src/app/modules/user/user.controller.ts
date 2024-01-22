import { UserService } from "./user.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student: studentData } = req.body;

    // const zodParseData = studentValidationSchema.parse(studentData);

    const result = await UserService.createStudentIntoDB(password, studentData);

    res.status(200).json({
      success: true,
      message: "student is created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something wrong",
      data: error,
    });
  }
};
