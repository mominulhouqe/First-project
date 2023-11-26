import { Schema, model } from 'mongoose';
import { Gurdian, Student, UserName } from './student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
    trim: true,
    maxlength: [20, 'First Name can not be more than 20'],

    validate: {
      validator: function (value) {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameStr === value;
      },
      message: '{VALUE} is not in capitalize format',
    },
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, 'Last Name is required'],
  },
});

const gurdianSchema = new Schema<Gurdian>({
  fatherName: { type: String, required: [true, 'Father Name is required'] },
  mother: { type: String, required: [true, 'Mother is required'] },
  fatherContactNo: {
    type: String,
    required: [true, 'Father Contact Number is required'],
  },
  fatherOccupation: {
    type: String,
    required: [true, 'Father Occupation is required'],
  },
});

const studentSchema = new Schema<Student>({
  id: {
    type: String,
    required: [true, 'Student ID is required'],
    unique: true,
  },
  name: userNameSchema,
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message:
        "The gender field can only be one of the following: 'male', 'female', 'other'",
    },
    required: [true, 'Gender is required'],
  },
  dateOfBirth: String,
  email: {
    type: String,
  },
  contactNumber: {
    type: String,
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  address: {
    type: String,
  },
  gurdian: gurdianSchema,
  isActive: { type: String, enum: ['active', 'inactive'] },
});

export const StudentModel = model<Student>('Student', studentSchema);
