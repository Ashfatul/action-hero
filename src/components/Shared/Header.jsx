import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

export default function Header() {
   const AuthData = useContext(AuthContext);
   const { user, logOut } = AuthData;

   const handleLogout = () => {
      const confirmStatus = confirm("Are You Sure To Logout?");
      if (confirmStatus) {
         logOut();
         toastr.success("Logged Out");
      }
   };
   return (
      <div className="bg-cyan-900">
         <div className="container navbar">
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
                        <NavLink to="/">Home</NavLink>
                     </li>
                     <li>
                        <NavLink to="/all-toys">All Toys</NavLink>
                     </li>
                     {user && (
                        <>
                           <li>
                              <NavLink to={`/my-toys/${user?.uid}`}>
                                 My Toys
                              </NavLink>
                           </li>
                           <li>
                              <NavLink to="/add-new-product">Add A Toy</NavLink>
                           </li>
                        </>
                     )}
                     <li>
                        <NavLink to="/blogs">Blog</NavLink>
                     </li>
                  </ul>
               </div>
               <Link
                  className="btn btn-ghost normal-case text-xl flex items-center"
                  to="/"
               >
                  ActionHero
               </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                  <li>
                     <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                     <NavLink to="/all-toys">All Toys</NavLink>
                  </li>
                  {user && (
                     <>
                        {" "}
                        <li>
                           <NavLink to={`/my-toys/${user?.uid}`}>
                              My Toys
                           </NavLink>
                        </li>
                        <li>
                           <NavLink to="/add-new-product">Add A Toy</NavLink>
                        </li>
                     </>
                  )}
                  <li>
                     <NavLink to="/blogs">Blog</NavLink>
                  </li>
               </ul>
            </div>
            <div className="navbar-end">
               {user ? (
                  <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                     <button>
                        <img
                           src={
                              user
                                 ? user?.photoURL
                                 : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                           }
                           className="user-image h-10 w-10 rounded-full bg-green-500 object-cover object-center"
                           alt="user image"
                           tabIndex="0"
                        />
                     </button>
                     <ul
                        tabIndex="0"
                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                     >
                        <p className="p-3 border-b-2 border-gray-700">
                           {user?.displayName}
                        </p>
                        <li className="mt-1">
                           <button onClick={handleLogout}>Log Out</button>
                        </li>
                     </ul>
                  </div>
               ) : (
                  <NavLink className="btn" to="/login">
                     Login
                  </NavLink>
               )}
            </div>
         </div>
      </div>
   );
}
