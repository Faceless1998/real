import React, { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { FaSkullCrossbones } from "react-icons/fa6";
import "./register.css";
const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordStrength, setPasswordStrength] = useState("");

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "password") {
      checkPasswordStrength(value);
    }
  };

  const checkPasswordStrength = (password) => {
    let strength = "";
    if (password.length < 8) {
      strength = "Weak";
    } else if (password.length < 12) {
      strength = "Avarage";
    } else {
      strength = "Strong";
    }
    setPasswordStrength(strength);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    if (!username || !email || !password || !confirmPassword) {
      setMessage("ყველა ველი უნდა შეავსოთ!!!");
      setSuccess(false);

      return;
    }

    if (!isPasswordValid(password)) {
      setMessage("შეიყვანეთ სწორი პაროლი");
      setSuccess(false);

      return;
    }

    if (password !== confirmPassword) {
      setMessage("პაროლები არ ემთხვევა");
      setSuccess(false);
      return;
    }

    setMessage("რეგისტრაცია წარმატებით დასრულდა");
    setSuccess(true);
  };

  const isPasswordValid = (password) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className="registration-form">
      <h2>რეგისტრაცია</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ზედმეტსახელი</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>მეილი</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>მეილი</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>დაადასტურეთ პაროლი</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">რეგისტრაცია</button>
      </form>
      {message &&
        (success ? (
          <div className="message">
            <FaCircleCheck className="check" />
            {message}
          </div>
        ) : (
          <div className="message">
            <FaSkullCrossbones className="uncheck" />
            {message}
          </div>
        ))}
    </div>
  );
};

export default Register;
