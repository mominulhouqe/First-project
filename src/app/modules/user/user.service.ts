import { object } from "zod";
import config from "../../config";
import { TStudent } from "../student/student.interface";
import { NewUser } from "./user.interface";
import { User } from "./user.model";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // if (await Student.isUserExists(studentData.id)) {
  //   throw new Error("user already exists!");
  // }

  // create a user object
  const user: NewUser = {};
  // if password is not given, use deafult password

  user.password = password || (config.default_password as string);

  // set student role

  user.role = "student";

  // set manually gengerated id
  user.id = "2000001";
  // create a user
  const result = await User.create(user);

  if (Object.keys(result).length) {
    // set id, _id a user
    studentData.id = result.id;
  }
  return result;
};
export const UserService = {
  createStudentIntoDB,
};
