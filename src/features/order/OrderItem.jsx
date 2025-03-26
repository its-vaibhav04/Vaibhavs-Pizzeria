import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-1 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p className="dark:text-stone-200">
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold dark:text-stone-200">
          {formatCurrency(totalPrice)}
        </p>
      </div>
      <p className="text-sm text-stone-500 capitalize italic dark:text-stone-400">
        {isLoadingIngredients ? "Loading..." : ingredients.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;
