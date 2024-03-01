import "./LoginPage.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getUser, signin } from "../../services/userServices";
import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "Please enter valid email address" })
    .min(8, { message: "email must be more than 3 characters" }), // 3 rules, it should be string, email and min 3 chars
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(15, { message: "Password must not exceed 15 characters." }),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { state } = useLocation();

  const onSubmit = (formData) => {
    signin(formData)
      .then((res) => {
        setIsLoading(true);
        window.location = state ? state.from : "/";
        setIsLoading(false);
        setError("");
      })
      .catch((err) => {
        setError(err.response.data.message);
        setIsLoading(false);
      });
  };

  return (
    <>
      {getUser() && <Navigate to="/" />}
      <section className="align_center form_page">
        <form className="authentication_form" onSubmit={handleSubmit(onSubmit)}>
          <h2>Login Form</h2>
          <div className="form_inputs">
            <div>
              <label htmlFor="name">Email</label>
              <input
                type="email"
                id="email"
                className="form_text_input"
                placeholder="Enter your email id..."
                {...register("email")}
              />
              {errors.email && (
                <em className="form_error">{errors.email.message}</em>
              )}
            </div>
            <div>
              <label htmlFor="phone">Password</label>
              <input
                type="password"
                id="password"
                className="form_text_input"
                placeholder="Enter your password..."
                {...register("password")}
              />
              {errors.password && (
                <em className="form_error">{errors.password.message}</em>
              )}
            </div>
            {error && <em className="form_error">{error}</em>}
            <button className="form_submit">
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
export default LoginPage;
