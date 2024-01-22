export type TUser = {
  id: string;
  password: string;
  needPasswordChange: boolean;
  role: "admin" | "student" | "faculty";
  status: "in-proccess" | "blocked";
  isDeleted: boolean;
};
 
export type NewUser = {
  id:string;
  password: string;
  role: string;
};
