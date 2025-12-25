import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Checkout = () => {
  const { state } = useContext(StoreContext);

  const total = state.cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Checkout</h2>

      <form>
        <input placeholder="Address" required />
        <input placeholder="City" required />
        <input placeholder="Pincode" required />
      </form>

      <h3>Order Total: ₹{total}</h3>
    </div>
  );
};

export default Checkout;
