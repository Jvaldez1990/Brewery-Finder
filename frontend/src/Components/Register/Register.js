import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../Shared/baseUrl";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isBrewer, setBrewerRole] = useState("ROLE_USER");

  const handleSubmit = () => {
    const data = { username: username, password: password, confirmPassword: confirmPassword, role: isBrewer };
    if (password === confirmPassword) {
      axios.post(baseUrl + "/register", data);
    }
  };

  return (
    <div>
      <h1>Create Account</h1>
      <label class="sr-only">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        class="form-control"
        placeholder="Username"
        v-model="user.username"
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <label class="sr-only">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        class="form-control"
        placeholder="Password"
        v-model="user.password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="password"
        id="password-confirm"
        name="password-confirm"
        class="form-control"
        placeholder="Confirm Password"
        v-model="user.password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <label>Are you a Brewer?</label>
      <input
        type={"checkbox"}
        placeholder="Are you a brewer?"
        id="brewerCheckbox"
        name="brewerCheckbox"
        class="brewerCheckbox"
        onChange={(e) => setBrewerRole("ROLE_BREWER")}
      ></input>
      <br />
      <Link to="/login">Have an account?</Link>

      <button type="submit" onClick={handleSubmit}>
        <Link to="/login">Create Account</Link>
      </button>
    </div>
  );
};

export default Register;
