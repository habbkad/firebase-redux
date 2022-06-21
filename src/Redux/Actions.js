export const addStudent = (student) => {
  return {
    type: "ADD_STUDENT",
    payload: student,
  };
};

export const authUser = (auth) => {
  return {
    type: "AUTH_LOGIN",
    payload: auth,
  };
};
