import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <h1 className="text-[20px] font-[700]">You look lost</h1>
      <Link to="/" className="text-blue-500">
        Click to go home
      </Link>
    </div>
  );
};

export default ErrorPage;
