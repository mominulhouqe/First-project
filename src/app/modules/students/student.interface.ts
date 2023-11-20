import { Schema, model, connect } from 'mongoose'; // 1. Create an interface representing a document in MongoDB.

export type Gurdian = {
  fatherName: string;
  mother: string;
  fatherOccupation: string;
  fatherContactNo: string;
};

export type Student = {
  id: string;
  name: {
    firstName: string;

    middleName: string;
    lastName: string;
  };
  gender: 'male' | 'female';
  dateOfBirth: string;
  contactNumber: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  email: string;
  avatar?: string;
  address: string;
  gurdian: Gurdian;
};
