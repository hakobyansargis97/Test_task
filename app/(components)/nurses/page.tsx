import { EmployeeTable } from '@components';
import { EmployeeType } from '@types';

const Nurses = () => {
  return <EmployeeTable employeeType={EmployeeType.NURSES} />;
};

export default Nurses;
