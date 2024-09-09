import { Formik, Form, Field, ErrorMessage } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { registerValidationSchema } from "../../components/validation/validationSchema"; // Import the validation schema
import { registerInitialValues } from "../../components/formConfig/formConfig"; // Import the initial values
import Logo from "../../images/school.png"; // Import the logo image

const Register = () => {
  // Form submission handler
  const handleSubmit = (values) => {
    console.log("Form values:", values);
  };

  return (
    <div className="flex h-screen">
      {/* Left side with Logo */}
      <div className="w-4/5 bg-white flex justify-center items-center">
        <div className="flex items-center justify-center flex-col">
          <img src={Logo} alt="Logo" className="" />
        </div>
      </div>

      {/* Right side with Form */}
      <div className="w-2/5 bg-violet-900 flex justify-center items-center">
        <div className="max-w-lg w-full p-6 bg-white rounded-xl mx-8 shadow-xl">
          <div className="flex items-center justify-center text-violet-900 mb-6">
            <i className="pi pi-lock mr-4 text-3xl" />
            <h2 className="text-3xl font-bold">Admin Portal</h2>
          </div>
          <Formik
            initialValues={registerInitialValues}
            validationSchema={registerValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-4">
                {/* Username Field */}
                <div className="p-float-label">
                  <Field
                    name="username"
                    as={InputText}
                    id="username"
                    className="w-full"
                  />
                  <label htmlFor="username">Username</label>
                  <ErrorMessage
                    name="username"
                    component="small"
                    className="p-error"
                  />
                </div>

                {/* Email Field */}
                <div className="p-float-label">
                  <Field
                    name="email"
                    as={InputText}
                    id="email"
                    className="w-full"
                  />
                  <label htmlFor="email">Email</label>
                  <ErrorMessage
                    name="email"
                    component="small"
                    className="p-error"
                  />
                </div>

                {/* Password Field */}
                <div className="p-float-label">
                  <Field
                    name="password"
                    type="password"
                    as={InputText}
                    id="password"
                    className="w-full"
                  />
                  <label htmlFor="password">Password</label>
                  <ErrorMessage
                    name="password"
                    component="small"
                    className="p-error"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  label="Register"
                  icon="pi pi-user-plus"
                  className="p-button-success w-full mt-4 bg-violet-900 transition duration-300 font-bold text-lg text-white px-4 py-2 rounded-md
                  text white"
                  disabled={isSubmitting}
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
