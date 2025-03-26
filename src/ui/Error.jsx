import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center gap-4 px-4 py-8 text-center">
      <h1 className="text-2xl font-bold text-stone-800 dark:text-stone-200">
        Something went wrong 😢
      </h1>
      <p className="text-stone-600 dark:text-stone-400">
        {error.data || error.message}
      </p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
