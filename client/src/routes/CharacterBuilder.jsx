import WIP from "../components/WIP";

function CharacterBuilder() {
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
      <h1 style={{ fontSize: "3.2rem" }}>Character Builder</h1>
      <WIP />
    </div>
  );
}

export default CharacterBuilder;
