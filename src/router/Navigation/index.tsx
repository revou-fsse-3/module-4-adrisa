import { Outlet, Link } from "react-router-dom";
import { Navbar } from "../../components";

const Navigation = () => {
  return (
    <>
      <Navbar>
        <Link
          className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
          to={"/"}
        >
          Home
        </Link>
        <Link
          className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          to="/category"
        >
          Category
        </Link>
        <Link
          className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          to="simulation"
        >
          Simulation
        </Link>
        <Link
          className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          to="/sign-in"
        >
          Sign In
        </Link>
        <Link
          className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          to="sign-up"
        >
          Sign Up
        </Link>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Navigation;
