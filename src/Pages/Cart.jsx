import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { state, dispatch } = useContext(StoreContext);

  const total = state.cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>

      {state.cart.map(item => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>₹{item.price}</p>
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
            }
          >
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
      <Link to="/checkout">Proceed to Checkout</Link>
    </div>
  );
};

export default Cart;
