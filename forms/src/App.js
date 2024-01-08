import "./App.css";
import { useState } from "react";
import validateEmail, { validEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({ value: "", isTouched: false });

  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    // Implement this function to validate all the form fields
    return (
      firstname &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      role !== "role"
    );
  };

  const clearForm = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword({ value: "", isTouched: false });

    setRole("role");
    // Implement this function to clear all the form fields
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up Form</h1>
        <fieldset>
          <legend>Sign Up</legend>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              placeholder="First name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input
              placeholder="Last name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              placeholder="Password"
              type="password"
              value={password.value}
              onChange={(e) =>
                setPassword({ ...password, value: e.target.value })
              }
              onBlur={() => setPassword({ ...password, isTouched: true })}
            />
            {!password.isTouched ? null : password.value.length < 8 ? (
              <PasswordErrorMessage />
            ) : null}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit">Create account</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
