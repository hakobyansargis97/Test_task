import { EmployeeTable } from '@components';
import { EmployeeType } from '@types';

const Doctors = () => {
  return <EmployeeTable employeeType={EmployeeType.DOCTOR} />;
};

export default Doctors;
