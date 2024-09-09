import { Formik, Form, Field, ErrorMessage } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { loginValidationSchema } from "../../components/validation/validationSchema"; // Import the validation schema
import { loginInitialValues } from "../../components/formConfig/formConfig"; // Import the initial values

const Login = () => {
  // Form submission handler
  const handleSubmit = (values) => {
    // Handle form submission logic, e.g., call an API to login
    console.log("Form values:", values);
  };

  return (
    <div className="p-4 border rounded-md w-full max-w-md mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4">Admin Login</h2>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-4">
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
              label="Login"
              icon="pi pi-sign-in"
              className="p-button-primary w-full"
              disabled={isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
