
import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}) {
  const classes = `btn btn-${variant} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
