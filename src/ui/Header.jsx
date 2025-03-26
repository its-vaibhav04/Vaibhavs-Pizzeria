import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6 dark:border-stone-700 dark:bg-stone-800">
      <Link to="/" className="tracking-widest dark:text-stone-200">
        Vaibhav's Pizzeria
      </Link>
      <div className="flex items-center gap-4">
        <SearchOrder />
        <Username />
      </div>
    </header>
  );
}

export default Header;
