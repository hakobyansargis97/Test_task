export const constants = {
  endpoints: {
    getDepartments: '/api/departments',
    doctors: '/api/doctors',
    nurses: '/api/nurses',
  },
  paths: {
    doctors: '/doctors',
    addDoctor: '/doctors/add',
    editDoctor: '/doctors/edit/:id',
    nurses: '/nurses',
    addNurse: '/nurses/add',
    editNurse: '/nurses/edit/:id',
  },
} as const;
