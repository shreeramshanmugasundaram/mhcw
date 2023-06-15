import { useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [showpass, setShowpass] = useState(false);

  const init_formdata = { name: "", password: "", cpassword: "", phone: "" };
  const [formData, setFormData] = useState(init_formdata);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handling Login
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="login center-div">
        <form onSubmit={handleSubmit}>
          <div className="login__inputs">
            <input
              required
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />

            <input
              placeholder="Phone Number"
              name="phone"
              required
              type="text"
              onChange={handleChange}
            />
            <input
              placeholder="Password"
              name="password"
              required
              type={showpass ? "text" : "password"}
              onChange={handleChange}
            />

            <input
              placeholder="Confirm Password"
              name="cpassword"
              type={showpass ? "text" : "password"}
              required
              onChange={handleChange}
            />

            <div className="checkbox-div">
              <input
                style={{ width: "40px" }}
                type="checkbox"
                onChange={() => {
                  setShowpass((previous) => !previous);
                }}
              />
              <span>Show Password</span>
            </div>
            <button>Register </button>
          </div>

          <NavLink to="/login" className="changeform">
            Already have a account <b>Login Here</b>
          </NavLink>
        </form>
      </div>
    </>
  );
};

export default Register;
