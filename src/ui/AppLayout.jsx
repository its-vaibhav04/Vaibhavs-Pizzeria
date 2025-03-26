import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-stone-100 dark:bg-stone-900">
      {isLoading && <Loader />}
      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl px-4 py-8 dark:text-stone-200">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
