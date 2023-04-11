function Button({ border, color, children, height, width, radius, onClick }) {
  const styles = {
    backgroundColor: color && color,
    border: border && border,
    borderRadius: radius && radius,
    height: height && height,
    width: width && width,
  };

  return (
    <button onClick={onClick} style={styles}>
      {children}
    </button>
  );
}

export default Button;
