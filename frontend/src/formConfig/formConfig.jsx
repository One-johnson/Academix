export const registerFormConfig = {
  initialValues: {
    name: "",
    email: "",
    password: "",
  },
  fields: [
    { name: "name", label: "Username", type: "text" },
    { name: "email", label: "Email", type: "text" },
    { name: "password", label: "Password", type: "password" },
  ],
};

export const loginFormConfig = {
  initialValues: {
    name: "",
    password: "",
  },
  fields: [
    { name: "name", label: "Username", type: "text" },
    { name: "password", label: "Password", type: "password" },
  ],
};
