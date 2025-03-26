import { useSelector } from "react-redux";
import { getCart, getTotalCartPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

function Cart() {
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const username = useSelector((state) => state.user.username);

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold dark:text-stone-200">
        Your cart, {username}
      </h2>

      <ul className="mt-3 divide-y divide-stone-200 border-t border-b dark:divide-stone-700 dark:border-stone-700">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-y-2">
        <p className="text-sm font-medium text-stone-600 dark:text-stone-400">
          Price: {formatCurrency(totalCartPrice)}
        </p>
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
      </div>
    </div>
  );
}

export default Cart;
