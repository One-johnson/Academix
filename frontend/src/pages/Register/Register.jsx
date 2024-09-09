import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";
import { registerValidationSchema } from "../../components/validation/validationSchema";
import { registerInitialValues } from "../../components/formConfig/formConfig";
import Logo from "../../images/school.png";
import axios from "axios";

const fieldStyle =
  "border-2 border-gray-300 rounded-lg w-full py-2 px-3 focus:outline-none focus:border-violet-800 transition duration-300 focus:border-2 hover:border-gray-500 hover:border-2";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Form submission handler
  const handleSubmit = async (values) => {
    setLoading(true);
    setErrorMessage("");

    try {
      // Simulate a delay to show the spinner for a longer time (e.g., 2 seconds)
      await new Promise((resolve) => setTimeout(resolve, 4000));

      // API call to register the user
      const response = await axios.post(
        "http://localhost:5000/api/register",
        values
      );

      if (response.status === 201) {
        console.log("Registration successful:", response.data.message);
        // Additional delay to keep the spinner showing for a little longer
        setTimeout(() => {
          setLoading(false); // Stop the loading spinner
          navigate("/login"); // Navigate to login page after successful registration
        }, 1500); // Delay for UX effect (1.5 seconds)
      } else {
        console.error("Unexpected response:", response);
        setErrorMessage("Unexpected error occurred. Please try again.");
        setLoading(false); // Stop loading spinner on error
      }
    } catch (error) {
      console.error("Registration failed:", error);
      setErrorMessage(
        error.response?.data?.message ||
          "Registration failed. Please try again."
      );
      setLoading(false); // Stop loading spinner on error
    }
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
          <div className="flex items-center justify-center text-violet-900 mb-8">
            <i className="pi pi-lock mr-4 text-3xl" />
            <h2 className="text-3xl font-bold">Admin Portal</h2>
          </div>
          <Formik
            initialValues={registerInitialValues}
            validationSchema={registerValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-5">
                {/* Username Field */}
                <div className="flex items-center">
                  <div className="p-float-label flex-1">
                    <Field
                      name="username"
                      as={InputText}
                      id="username"
                      className={fieldStyle}
                    />
                    <label htmlFor="username">Username</label>
                  </div>
                  <ErrorMessage
                    name="username"
                    component="small"
                    className="p-error ml-2 text-red-600"
                  />
                </div>

                {/* Email Field */}
                <div className="flex items-center">
                  <div className="p-float-label flex-1">
                    <Field
                      name="email"
                      as={InputText}
                      id="email"
                      className={fieldStyle}
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  <ErrorMessage
                    name="email"
                    component="small"
                    className="p-error ml-2 text-red-600"
                  />
                </div>

                {/* Password Field */}
                <div className="flex items-center">
                  <div className="p-float-label flex-1">
                    <Field
                      name="password"
                      type="password"
                      as={InputText}
                      id="password"
                      className={fieldStyle}
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="small"
                    className="p-error ml-2 text-red-600"
                  />
                </div>

                {/* Error Message */}
                {errorMessage && (
                  <div className="text-red-600 text-center mb-4">
                    {errorMessage}
                  </div>
                )}

                {/* Submit Button or Spinner */}
                {loading ? (
                  <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
                ) : (
                  <Button
                    type="submit"
                    label="Register"
                    className="p-button-success w-full mt-4 bg-violet-900 transition duration-300 font-bold text-lg text-white px-4 py-2 rounded-md uppercase"
                    disabled={isSubmitting}
                  />
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
