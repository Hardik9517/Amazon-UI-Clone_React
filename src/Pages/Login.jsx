import { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const { dispatch } = useContext(StoreContext);
  const navigate = useNavigate();

  const loginHandler = () => {
    dispatch({ type: "LOGIN", payload: { name: email } });
    navigate("/");
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Enter email"
        onChange={e => setEmail(e.target.value)}
      />
      <button onClick={loginHandler}>Login</button>
    </div>
  );
};

export default Login;
