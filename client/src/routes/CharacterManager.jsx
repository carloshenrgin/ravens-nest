import WIP from "../components/WIP";

function CharacterManager() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "6.4rem",
        marginTop: "24vh",
      }}
    >
      <h1 style={{ fontSize: "3.2rem" }}>Character Manager</h1>
      <WIP />
    </div>
  );
}

export default CharacterManager;
