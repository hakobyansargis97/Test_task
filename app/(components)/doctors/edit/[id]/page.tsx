import { AddOrUpdate } from '@components';
import { constants } from '@constants';
import { EmployeeType, IDoctorsList } from '@types';
const { endpoints } = constants;

interface IProps {
  params: Promise<{
    id: string;
  }>;
}

export const generateStaticParams = async () => {
  const response = await fetch(`http://localhost:3000${endpoints.doctors}`);
  const doctorsList: IDoctorsList = await response.json();
  return doctorsList.data.map(({ id }) => ({ id }));
};

const EditDoctor = async ({ params }: IProps) => {
  const { id } = await params;
  return <AddOrUpdate id={id} employeeType={EmployeeType.DOCTOR} />;
};

export const dynamic = 'force-dynamic';

export default EditDoctor;
