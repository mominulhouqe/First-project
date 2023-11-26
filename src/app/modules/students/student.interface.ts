export type Gurdian = {
  fatherName: string;
  mother: string;
  fatherOccupation: string;
  fatherContactNo: string;
};

export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  dateOfBirth?: string;
  contactNumber: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  email: string;
  avatar?: string;
  address: string;
  gurdian: Gurdian;
  isActive: 'active' | 'inactive';
};
