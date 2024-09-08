import { Formik, Form, Field } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { loginFormConfig } from "../../formConfig/formConfig";
import { loginValidationSchema } from "../../validation/validationSchema"; // Make sure to define this
import "primeicons/primeicons.css";
import axios from "axios";
import Logo from "../../images/school.png";

const Login = () => {
  return (
    <div className="flex h-screen">
      <div className="w-4/5 bg-gray-200 flex items-center justify-center">
        <div className="flex items-center justify-center flex-col">
        <img src={Logo} alt="Logo" className="" />
        </div>
      </div>

      <div className="w-2/5 bg-violet-900 flex justify-center items-center relative">
        <div className="max-w-lg w-full p-6 bg-white rounded-xl mx-8 shadow-xl">
        <div className="text-violet-900 flex items-center justify-center mb-6 space-x-5">
            <i className="pi pi-lock mr-2 text-2xl"></i>
            <h2 className="text-3xl font-bold text-center">Admin Portal</h2>
          </div>
          <Formik
            initialValues={loginFormConfig.initialValues}
            validationSchema={loginValidationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);

              axios
                .post("http://localhost:5000/api/users/login", values)
                .then((response) => {
                  console.log("Login successful:", response.data);
                  setSubmitting(false);
                  resetForm();
                })
                .catch((error) => {
                  console.error("Login error:", error);
                  setSubmitting(false);
                });
            }}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                {loginFormConfig.fields.map((field) => (
                  <div key={field.name} className="mt-4">
                    <Field
                      name={field.name}
                      type={field.type}
                      component={InputText}
                      placeholder={field.label}
                      className="w-full px-3 py-2 border-2 rounded-md border-gray-300 outline-none focus:outline-none"
                    />
                    {errors[field.name] && touched[field.name] && (
                      <span className="text-red-500 text-sm font-semibold">
                        {errors[field.name]}
                      </span>
                    )}
                  </div>
                ))}
                <Button
                  label="Login"
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-violet-900 text-white py-2 px-4 rounded-lg w-full hover:bg-violet-600 transition duration-300 mt-5 font-bold text-lg mb-3 uppercase"
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;