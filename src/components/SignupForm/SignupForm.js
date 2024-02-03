import React, { useState } from "react";
import "./SignupForm.css";
import { validateEmail } from "../../utils/validation";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    country: "",
    age: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    // Validate email
    if (!validateEmail(email)) {
      setErrors({ ...errors, email: "Invalid email format" });
      return;
    }

    // Validate password
    if (password.length < 8) {
      setErrors({
        ...errors,
        password: "Password must be at least 8 characters long",
      });
      return;
    }

    // Form is valid, you can submit the data or perform further actions
    console.log("Form submitted:", formData);
  };

  const isFormValid = () => {
    const { email, password } = errors;
    return !email && !password && formData.email && formData.password;
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>Signup Form</h1>
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <span>{errors.email}</span>
      </div>

      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Country:</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Age:</label>
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <span>{errors.password}</span>
      </div>

      <button type="submit" disabled={!isFormValid()}>
        Submit
      </button>
    </form>
  );
};

export default SignupForm;
