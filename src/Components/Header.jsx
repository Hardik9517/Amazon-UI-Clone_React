import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Header = () => {
  const { state, dispatch } = useContext(StoreContext);

  return (
    <header className="header">
      <Link to="/" className="logo">Amazon Clone</Link>

      <nav>
        <Link to="/cart">Cart ({state.cart.length})</Link>

        {state.user ? (
          <>
            <span>Hello, {state.user.name}</span>
            <button onClick={() => dispatch({ type: "LOGOUT" })}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
