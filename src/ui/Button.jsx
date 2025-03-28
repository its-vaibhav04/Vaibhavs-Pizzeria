import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm rounded-full bg-yellow-400 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed dark:bg-yellow-500 dark:text-stone-900 dark:hover:bg-yellow-400 dark:focus:bg-yellow-400 dark:focus:ring-yellow-400 dark:focus:ring-offset-stone-900 ";

  const styles = {
    primary: base + `px-3 py-4 md:px-6 md:py-4 `,
    small: base + "px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-300 font-semibold tracking-wide text-stone-400 uppercase transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:ring focus:ring-stone-200 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed dark:border-stone-600 dark:text-stone-400 dark:hover:bg-stone-700 dark:focus:bg-stone-700 dark:hover:text-stone-200 dark:focus:text-stone-200 dark:focus:ring-stone-600 dark:focus:ring-offset-stone-900 px-4 py-2.5 md:px-6 md:py-3.5",

    round: base + "px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
