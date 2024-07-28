import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../api/user";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [formFieldsError, setFormFieldsError] = useState({
    emailError: "",
    passwordError: "",
  });
  const [loginError, setLoginError] = useState("");

  function handleOnChange(event) {
    setLoginDetails({
      ...loginDetails,
      [event.target.name]: event.target.value,
    });
  }

  function isValidLoginInputs() {
    let isValid = true;

    if (!loginDetails.email) {
      isValid = false;
      setFormFieldsError((prevState) => ({
        ...prevState,
        emailError: "Email is empty.",
      }));
    } else {
      setFormFieldsError((prevState) => ({
        ...prevState,
        emailError: "",
      }));
    }

    if (!loginDetails.password) {
      isValid = false;
      setFormFieldsError((prevState) => ({
        ...prevState,
        passwordError: "password is empty.",
      }));
    } else {
      setFormFieldsError((prevState) => ({
        ...prevState,
        passwordError: "",
      }));
    }

    return isValid;
  }

  async function handleLogin(event) {
    event.preventDefault();

    setLoginError("");

    if (!isValidLoginInputs()) {
      return;
    }

    const { statusCode, data, errorMessage } = await loginUser(loginDetails);
    if (statusCode != 200) {
      console.error(`Login error : ${errorMessage}`);
      setLoginError(errorMessage);
      return;
    }

    localStorage.setItem(
      "currentUser",
      JSON.stringify({ name: data.username })
    );
    localStorage.setItem("token", data.token);
    navigate("/formDashboard");
  }

  return (
    <div>
      {loginError && <div>{loginError}</div>}
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          onChange={handleOnChange}
          type="email"
          name="email"
          placeholder="Enter your email"
          value={loginDetails.email}
        />
        {formFieldsError.emailError && <div>{formFieldsError.emailError}</div>}
        <label htmlFor="password">Password</label>
        <input
          onChange={handleOnChange}
          type="password"
          name="password"
          value={loginDetails.password}
        />
        {formFieldsError.passwordError && (
          <div>{formFieldsError.passwordError}</div>
        )}
        <input type="submit" value="Log In" />
      </form>
      <p>
        Don't have an account? <Link to="/register">Register now</Link>
      </p>
    </div>
  );
}

export default Login;
