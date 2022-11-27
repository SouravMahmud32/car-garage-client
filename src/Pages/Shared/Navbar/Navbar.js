import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft, FaArrowLeft } from "react-icons/fa";
import { FaTruckMonster } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .ctach((error) => console.error(error));
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/cars">Cars</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <FaTruckMonster></FaTruckMonster> carGarage
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              {user?.uid ? (
                <>
                  <Link to="/dashboard">Dashboard</Link>
                </>
              ) : (
                <></>
              )}
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <label htmlFor="dashboard-drawer">
            {" "}
            <FaArrowCircleLeft className="text-2xl mr-2 lg:hidden"></FaArrowCircleLeft>
          </label>
          {user?.uid ? (
            <>
              <span></span>
              <Link
                className="btn btn-primary"
                onClick={handleLogOut}
                variant="danger"
              >
                Log Out
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
