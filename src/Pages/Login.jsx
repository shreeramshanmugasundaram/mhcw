import { useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";

const Login = (props) => {
  const [showpass, setShowpass] = useState(false);

  const init_formdata = { phone: "", password: "" };
  const [formData, setFormData] = useState(init_formdata);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handling Login
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (isLogin) {
    //   dispatch(signin(formData, navigate));
    // } else {
    //   dispatch(signup(formData, navigate));
    // }
  };

  return (
    <>
      <div className="login center-div">
        <form onSubmit={handleSubmit}>
          <div className="login__inputs">
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
            <button>Login </button>
          </div>
          <NavLink to="/register" className="changeform">
            Don't have a account <b>Create now</b>
          </NavLink>
        </form>
      </div>
    </>
  );
};

export default Login;
