import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Vaibhav's Pizzeria</Link>
      <SearchOrder />

      <p> Vaibhav </p>
    </header>
  );
}

export default Header;
