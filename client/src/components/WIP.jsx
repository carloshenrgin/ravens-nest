import { ConeStriped } from "react-bootstrap-icons";

function WIP() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.4rem",
      }}
    >
      <ConeStriped size={144} />
      <h2 style={{ fontSize: "2.4rem" }}>Work Still In Progress</h2>
    </div>
  );
}

export default WIP;
