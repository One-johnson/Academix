import { Formik, Form, Field } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import Logo from "../../images/school.png";
import { registerFormConfig } from "../../formConfig/formConfig";
import { registerValidationSchema } from "../../validation/validationSchema";
import "primeicons/primeicons.css";

const Register = () => {
  return (
    <div className="flex h-screen">
      {/* Left side (optional, can be removed) */}
      <div className="w-4/5 bg-gray-200 flex items-center justify-center">
        <div className="flex items-center justify-center flex-col">
          <img src={Logo} alt="Logo" className="" />
        </div>
      </div>

      {/* Right side with the form */}
      <div className="w-2/5 bg-violet-900 flex justify-center items-center relative">
        <div className="max-w-lg w-full p-6 bg-white rounded-xl mx-8 shadow-xl">
          <div className="text-violet-900 flex items-center justify-center mb-6 space-x-5">
            <i className="pi pi-lock mr-2 text-2xl"></i>
            <h2 className="text-3xl font-bold text-center">Admin Portal</h2>
          </div>

          <Formik
            initialValues={registerFormConfig.initialValues}
            validationSchema={registerValidationSchema}
            onSubmit={(values) => {
              // Handle form submission here (e.g., API call)
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Field
                  name="name"
                  type="text"
                  component={InputText}
                  placeholder="Name"
                  className="w-full px-3 py-2 border rounded-lg"
                />
                {errors.name && touched.name && (
                  <span className="text-red-500">{errors.name}</span>
                )}
                <Field
                  name="email"
                  type="email"
                  component={InputText}
                  placeholder="Email"
                  className="w-full px-3 py-2 border rounded-lg mt-2"
                />
                {errors.email && touched.email && (
                  <span className="text-red-500">{errors.email}</span>
                )}
                <Field
                  name="password"
                  type="password"
                  component={InputText}
                  placeholder="Password"
                  className="w-full px-3 py-2 border rounded-lg mt-2"
                />
                {errors.password && touched.password && (
                  <span className="text-red-500">{errors.password}</span>
                )}
                <Button
                  label="Register"
                  type="submit"
                  className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg mt-4"
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
