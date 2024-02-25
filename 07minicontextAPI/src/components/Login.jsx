import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleClick = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={userName}
        onChange={(e) => setuserName(e.target.value)}
        placeholder="username"
      />
      { " "}
      <input
        type="passwrod"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default Login;
