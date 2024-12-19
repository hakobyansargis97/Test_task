import { AddOrUpdate } from '@components';
import { EmployeeType } from '@types';

const AddDoctor = () => {
  return <AddOrUpdate employeeType={EmployeeType.DOCTOR} />;
};

export default AddDoctor;
