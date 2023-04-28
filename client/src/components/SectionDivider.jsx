function SectionDivider({ direction, margin, className }) {
  const styles =
    direction === "horizontal"
      ? {
          height: "0",
          borderTop: "1px solid #a6a7ad",
          maxWidth: "100%",
          margin: margin && "2.8rem 0",
        }
      : {
          width: "0",
          borderLeft: "1px solid #a6a7ad",
          maxHeight: "100%",
          marginRight: margin && "2.8rem",
        };

  return <div className={className ? className : ""} style={styles}></div>;
}

export default SectionDivider;
