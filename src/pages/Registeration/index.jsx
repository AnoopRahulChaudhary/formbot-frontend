import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../../api/user";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCurrentUser } from "../../actions/currentUser.js";
import { CURRENT_USER, TOKEN } from "../../constants/localStorageKey.js";

function Registration() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [registrationDetails, setRegistrationDetails] = useState({
    username: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });
  const [formFieldsError, setFormFieldsError] = useState({
    usernameError: "",
    emailError: "",
    passwordError: "",
    confirmedPasswordError: "",
  });
  const [registrationError, setRegistrationError] = useState("");

  function handleOnChange(event) {
    setRegistrationDetails({
      ...registrationDetails,
      [event.target.name]: event.target.value,
    });
  }

  function isValidRegistrationInputs() {
    let isValid = true;

    if (!registrationDetails.username) {
      isValid = false;
      setFormFieldsError((prevState) => ({
        ...prevState,
        usernameError: "Username is empty.",
      }));
    } else {
      setFormFieldsError((prevState) => ({
        ...prevState,
        usernameError: "",
      }));
    }

    if (!registrationDetails.email) {
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

    if (!registrationDetails.password) {
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

    if (!registrationDetails.confirmedPassword) {
      isValid = false;
      setFormFieldsError((prevState) => ({
        ...prevState,
        confirmedPasswordError: "confirmedPassword is empty.",
      }));
    } else if (
      registrationDetails.confirmedPassword !== registrationDetails.password
    ) {
      isValid = false;
      setFormFieldsError((prevState) => ({
        ...prevState,
        confirmedPasswordError: "enter same password in both fields",
      }));
    } else {
      setFormFieldsError((prevState) => ({
        ...prevState,
        confirmedPasswordError: "",
      }));
    }

    return isValid;
  }

  async function handleRegistration(event) {
    event.preventDefault();
    if (!isValidRegistrationInputs()) {
      return;
    }

    const { statusCode, data, errorMessage } = await registerUser(
      registrationDetails
    );
    if (statusCode != 201) {
      setRegistrationError(errorMessage);
      return;
    }

    localStorage.setItem(
      CURRENT_USER,
      JSON.stringify({ username: data.username })
    );
    dispatch(addCurrentUser(data.username));
    localStorage.setItem(TOKEN, data.token);
    navigate("/formDashboard");
  }

  return (
    <div>
      {registrationError && <div>{registrationError}</div>}
      <form onSubmit={handleRegistration}>
        <label htmlFor="username">Username</label>
        <input
          onChange={handleOnChange}
          type="text"
          name="username"
          placeholder="Enter a username"
          value={registrationDetails.username}
        />
        {formFieldsError.usernameError && (
          <div>{formFieldsError.usernameError}</div>
        )}
        <label htmlFor="email">Email</label>
        <input
          onChange={handleOnChange}
          type="email"
          name="email"
          placeholder="Enter your email"
          value={registrationDetails.email}
        />
        {formFieldsError.emailError && <div>{formFieldsError.emailError}</div>}
        <label htmlFor="password">Password</label>
        <input
          onChange={handleOnChange}
          type="password"
          name="password"
          value={registrationDetails.password}
        />
        {formFieldsError.passwordError && (
          <div>{formFieldsError.passwordError}</div>
        )}
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          onChange={handleOnChange}
          type="password"
          name="confirmedPassword"
          value={registrationDetails.confirmedPassword}
        />
        {formFieldsError.confirmedPasswordError && (
          <div>{formFieldsError.confirmedPasswordError}</div>
        )}
        <input type="submit" value="Sign Up" />
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Registration;
