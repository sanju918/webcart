import "./SignUp.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import user from "../../assets/icons/user.webp";
import { signup } from "../../services/userServices";

const signUpSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Name should be at least 3 characters" }),
    email: z
      .string()
      .email({ message: "Enter valid email." })
      .min(3, { message: "Email should be mini 3 chars." }),
    password: z
      .string()
      .min(8, { message: "Must be more than 8 chars" })
      .max(16, { message: "Must not exceed 16 chars" }),
    confirmPassword: z.string(),
    deliveryAddress: z
      .string()
      .min(15, { message: "Delivery address must be at least 15 chars." }),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    {
      message: "Confirm Password doesn't match the Password.",
      path: ["confirmPassword"],
    }
  );

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [formError, setFormError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (formData) => {
    try {
      setIsLoading(true);
      await signup(formData, profilePic);
      setFormError("");
      setIsLoading(false);
      window.location = "/";
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setFormError(err.response.data.message);
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <section className="align_center form_page">
        <form
          action=""
          className="authentication_form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2>SignUp</h2>
          <div className="image_input_section">
            <div className="image_preview">
              <img
                src={profilePic ? URL.createObjectURL(profilePic) : user}
                alt="user image"
                id="file-ip-1-preview"
              />
            </div>
            <label htmlFor="file-ip-1" className="image_label">
              Upload Image
            </label>
            <input
              type="file"
              onChange={(e) => setProfilePic(e.target.files[0])}
              id="file-ip-1"
              className="image_input"
            />
          </div>
          <div className="form_inputs">
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="form_text_input"
                placeholder="Enter your name..."
                {...register("name")}
              />
              {errors.name && (
                <em className="form_error">{errors.name.message}</em>
              )}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                className="form_text_input"
                placeholder="Enter your email..."
                {...register("email")}
              />
              {errors.email && (
                <em className="form_error">{errors.email.message}</em>
              )}
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form_text_input"
                placeholder="Enter new password..."
                {...register("password")}
              />
              {errors.password && (
                <em className="form_error">{errors.password.message}</em>
              )}
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                className="form_text_input"
                placeholder="Re-enter the new password..."
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <em className="form_error">{errors.confirmPassword.message}</em>
              )}
            </div>
            <div>
              <label htmlFor="deliveryAddress">Delivery Address</label>
              <textarea
                id="deliveryAddress"
                className="input_textarea"
                placeholder="Enter your delivery address..."
                {...register("deliveryAddress")}
              />
              {errors.deliveryAddress && (
                <em className="form_error">{errors.deliveryAddress.message}</em>
              )}
            </div>
            <em className="form_error">{formError}</em>
            <button className="form_submit" disabled={isLoading}>
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default SignUp;
