function Button({ children, onClick, className, type }) {
  return (
    <button
      type={type ? type : "button"}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}

export default Button;
