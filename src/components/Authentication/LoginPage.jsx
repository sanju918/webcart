import "./LoginPage.css";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => console.log(formData);
  return (
    <>
      <section className="align_center form_page">
        <form
          action=""
          className="authentication_form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2>Login Form</h2>
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
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="number"
                id="phone"
                className="form_text_input"
                placeholder="Enter your phone no..."
                {...register("phone", { valueAsNumber: true })}
              />
            </div>
            <button className="form_submit">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};
export default LoginPage;
