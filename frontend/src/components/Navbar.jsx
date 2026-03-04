import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md px-6 py-3">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Recipe Cookbook
        </Link>
      </div>
      <div className="flex-none">
        <Link to="/" className="btn btn-ghost btn-sm mr-2">
          Home
        </Link>
        <Link to="/create" className="btn btn-sm btn-primary">
          Add Recipe
        </Link>
      </div>
    </div>
  );
}

export default Navbar;