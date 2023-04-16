function SectionDivider({ direction, margin, className }) {
  const styles =
    direction === "horizontal"
      ? {
          height: "0",
          borderTop: "1px solid #000",
          maxWidth: "100%",
          marginTop: margin && "2.8rem",
        }
      : {
          width: "0",
          borderLeft: "1px solid #000",
          maxHeight: "100%",
          marginRight: margin && "2.8rem",
        };

  return <div className={className ? className : ""} style={styles}></div>;
}

export default SectionDivider;
