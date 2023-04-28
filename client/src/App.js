import { Outlet } from "react-router-dom"; // Structure reutilization
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
