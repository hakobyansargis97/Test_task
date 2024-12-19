export type LayoutChildrenType = Readonly<{
  children: React.ReactNode;
}>;

export type Department = 'Cardiology' | 'Surgery';

export const enum EmployeeType {
  DOCTOR = 'Doctor',
  NURSES = 'Nurses',
}

export interface DepartmentServer {
  id: string;
  name: Department;
}

export interface IAddDoctorFormData {
  id: string;
  name: string;
  lastName: string;
  surname: string;
  department: Department;
  headOfDepartment: boolean;
}

export interface IDoctorsList {
  message: string;
  data: IAddDoctorFormData[];
}

export interface IDoctor {
  message: string;
  data: IAddDoctorFormData;
}
