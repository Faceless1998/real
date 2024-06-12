import React, { useState } from "react";
import "./login.css";
import { FaCircleCheck } from "react-icons/fa6";
import { FaSkullCrossbones } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!gmailRegex.test(email)) {
      setMessage("მეილი არასწორია ან არაა შეყვანილი");
      setSuccess(false);
      showMessageTemporary();
      return;
    }

    if (!password) {
      setMessage("შეავსეთ პაროლის ველი");
      setSuccess(false);
      showMessageTemporary();
      return;
    }

    setMessage("თქვენ შეხვედით სისტემაში");
    setSuccess(true);
    showMessageTemporary();
  };

  const showMessageTemporary = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <div className="login-form">
      <h2>შესვლა</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="მეილი"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="პაროლი"
          />
        </div>
        <button type="submit">შესვლა</button>
      </form>
      <Link to="/register">გსურთ შექმნათ ანგარიში? </Link>
      {message &&
        (success ? (
          <div className={`message ${!showMessage ? "hidden" : ""}`}>
            <FaCircleCheck className="check" />
            {message}
          </div>
        ) : (
          <div className={`message ${!showMessage ? "hidden" : ""}`}>
            <FaSkullCrossbones className="uncheck" />
            {message}
          </div>
        ))}{" "}
    </div>
  );
};

export default Login;
