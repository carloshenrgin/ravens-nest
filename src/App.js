import { Outlet } from "react-router-dom"; // Structure reutilization
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>React Router</h1>
      <Outlet />
    </div>
  );
}

export default App;
