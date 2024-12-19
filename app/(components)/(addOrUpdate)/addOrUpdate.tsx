'use client';

import { constants } from '@constants';
import { Department, DepartmentServer, EmployeeType, IAddDoctorFormData, IDoctor } from '@types';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';
import styles from './styles.module.scss';

const { paths, endpoints } = constants;

interface IProps {
  id?: string;
  employeeType: EmployeeType;
}

export const AddOrUpdate = ({ id, employeeType }: IProps) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    resetField,
    reset,
  } = useForm<IAddDoctorFormData>({
    defaultValues: {
      id: id || uuid(),
    },
  });

  const endpoint = employeeType === EmployeeType.DOCTOR ? endpoints.doctors : endpoints.nurses;

  const [showDepartmentOptions, setShowDepartmentOptions] = useState(false);
  const [departments, setDepartments] = useState<DepartmentServer[]>([]);

  const changeDepartmentValue = (defaultValue: Department) => {
    resetField('department', { defaultValue });
  };

  const submitHandle = async (data: IAddDoctorFormData) => {
    const response = await fetch(endpoint, {
      method: id ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to save doctor');
    }

    router.replace(employeeType === EmployeeType.DOCTOR ? paths.doctors : paths.nurses);
  };

  const getDepartments = async () => {
    const response = await fetch(endpoints.getDepartments);
    const data: DepartmentServer[] = await response.json();
    setDepartments(data);
  };

  const getDoctorDataAsync = async () => {
    const response = await fetch(`http://localhost:3000${endpoint}?id=${id}`);
    const { data }: IDoctor = await response.json();
    reset(data);
  };

  useEffect(() => {
    id && getDoctorDataAsync();
    getDepartments();
  }, []);

  return (
    <div className={styles.addWrapper} onClick={() => showDepartmentOptions && setShowDepartmentOptions(false)}>
      <h2>
        {id ? 'Edit' : 'Add'} {employeeType}
      </h2>
      <form onSubmit={handleSubmit(submitHandle)}>
        <label className={styles.formItem} data-error={!!errors.name}>
          Name
          <input type='text' {...register('name', { required: true, minLength: 3 })} />
          <span className={styles.formItemError}>{errors.name?.message}</span>
        </label>
        <label className={styles.formItem} data-error={!!errors.lastName}>
          Last name
          <input type='text' {...register('lastName', { required: true, minLength: 3 })} />
        </label>
        <label className={styles.formItem} data-error={!!errors.surname}>
          Surname
          <input type='text' {...register('surname', { required: true, minLength: 3 })} />
        </label>
        <label className={styles.formItem} data-error={!!errors.department}>
          Department
          <div
            {...register('department', { required: true })}
            className={styles.departmentSelect}
            onClick={() => !showDepartmentOptions && setShowDepartmentOptions(true)}
          >
            {getValues().department}
            {showDepartmentOptions && (
              <div className={styles.departmentOptions}>
                {departments.map((department) => (
                  <p key={department.id} onClick={() => changeDepartmentValue(department.name)}>
                    {department.name}
                  </p>
                ))}
              </div>
            )}
          </div>
        </label>
        {employeeType !== EmployeeType.NURSES && (
          <label className={`${styles.formItemHead}`}>
            <input type='checkbox' {...register('headOfDepartment')} />
            Head of Department
          </label>
        )}
        <button type='submit'>{id ? 'Save' : 'Add'}</button>
      </form>
    </div>
  );
};
