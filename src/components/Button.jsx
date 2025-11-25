import "../styles/componentsStyle/ButtonStyle.css";

export const Button = ({
  onClick,
  children,
  disabled = false,
  className = "default-button",
}) => (
  <button className={className} disabled={disabled} onClick={onClick}>
    {children}
  </button>
);
