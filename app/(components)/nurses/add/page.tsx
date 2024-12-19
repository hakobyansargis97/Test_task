import { AddOrUpdate } from '@components';
import { EmployeeType } from '@types';

const AddNurses = () => {
  return <AddOrUpdate employeeType={EmployeeType.NURSES} />;
};

export default AddNurses;
