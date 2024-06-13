import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-7xl text-center">HealthKeep</h1>
      <Link to="/home" className="text-red-600 hover:text-blue-700">
        Homepage
      </Link>
    </div>
  );
}

export default App;
