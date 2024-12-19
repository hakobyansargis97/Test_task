'use client';

import { CheckCircleFilled, DeleteOutlined, EditOutlined, MinusCircleFilled, UserAddOutlined } from '@ant-design/icons';
import { constants } from '@constants';
import { EmployeeType, IAddDoctorFormData, IDoctorsList } from '@types';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
const { paths, endpoints } = constants;

interface IProps {
  employeeType: EmployeeType;
}

export const EmployeeTable = ({ employeeType }: IProps) => {
  const [list, setList] = useState<IAddDoctorFormData[]>([]);

  const endpoint = employeeType === EmployeeType.DOCTOR ? endpoints.doctors : endpoints.nurses;

  const getListAsync = async () => {
    const response = await fetch(`http://localhost:3000${endpoint}`);
    const { data }: IDoctorsList = await response.json();
    setList(data);
  };

  const deleteEmployeeAsync = async (id: string) => {
    const response = await fetch(`http://localhost:3000${endpoint}`, {
      method: 'DELETE',
      body: JSON.stringify({ id }),
    });
    const { data }: IDoctorsList = await response.json();
    setList(data);
  };

  useEffect(() => {
    getListAsync();
  }, []);

  return (
    <div className={styles.employeeTableWrapper}>
      <Link
        href={employeeType === EmployeeType.DOCTOR ? paths.addDoctor : paths.addNurse}
        className={styles.createEmployeeBtn}
      >
        Add {employeeType} <UserAddOutlined />
      </Link>
      <div className={styles.employeeTable}>
        <div className={styles.tHead}>
          <p>Name</p>
          <p>Last name</p>
          <p>Surname</p>
          <p>Department</p>
          {employeeType !== EmployeeType.NURSES && <p>Head of Dep.</p>}
          <p>Action</p>
        </div>
        <div className={styles.tBody}>
          {list.map((doctor) => (
            <div key={doctor.id} className={styles.tBodyItem}>
              <p>{doctor.name}</p>
              <p>{doctor.lastName}</p>
              <p>{doctor.surname}</p>
              <p>{doctor.department}</p>
              {employeeType !== EmployeeType.NURSES && (
                <p>
                  {doctor.headOfDepartment ? <CheckCircleFilled style={{ color: '#1677ff' }} /> : <MinusCircleFilled />}
                </p>
              )}
              <p>
                <Link
                  href={`${(employeeType === EmployeeType.DOCTOR ? paths.editDoctor : paths.editNurse).slice(0, -3)}${
                    doctor.id
                  }`}
                >
                  <EditOutlined style={{ color: '#1677ff' }} />
                </Link>
                <DeleteOutlined style={{ color: 'red' }} onClick={() => deleteEmployeeAsync(doctor.id)} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
