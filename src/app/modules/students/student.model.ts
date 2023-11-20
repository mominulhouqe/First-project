// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Schema, model, connect } from 'mongoose';
import { Gurdian, Student, UserName } from './student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const gurdianSchema = new Schema<Gurdian>({
  fatherName: { type: String, required: true },
  mother: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: ['male', 'female'],
  dateOfBirth: String,
  email: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  address: {
    type: String,
    required: true,
  },
  gurdian: gurdianSchema,
  isActive: {
    type: String,
    required: true,
  },
});

const Student = model<Student>('Student', studentSchema);
