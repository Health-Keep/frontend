import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-7xl">HomePage</h1>
      <Link to="/" className="text-red-600 hover:text-blue-700">
        Landing Page
      </Link>
    </div>
  );
};

export default HomePage;
