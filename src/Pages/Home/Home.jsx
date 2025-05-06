import React from "react";
import { Bell, User } from "lucide-react";
import Nothing from "../../assets/nothing.png";
import avatar from "../../assets/icons8-avatar.gif";
import { NavLink, Outlet, useLocation  } from "react-router";
import "./Home.css";
import Loader from "../../components/Loader/Loader";
const Home = () => {
  const location = useLocation();


  return (
    <div className="flex h-auto">
      {/* Sidebar */}
      <div className="w-[20%] min-h-screen bg-orange-600 text-white flex flex-col p-4 rounded-xl">
        <div className="text-4xl font-bold mb-8">Bill's Buddy</div>

        <ul className="space-y-2 w-full">
          {[
            "Pay-Airtime",
            "Pay-Data",
            "Pay-TV-Subscription",
            "Pay-Electricity-Token",
            "Pay-Gas",
            "Annual-Taxes",
            "Vehicle-Registration",
            "Medical-Bills",
            "Tuition",
            "Mobile-Phone",
          ].map((item) => (
            <li key={item}>
              <NavLink
                to={item}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md transition duration-200
           ${isActive ? "bg-white text-black underline" : " hover:underline"}`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mt-auto space-y-4">
          <div className="cursor-pointer hover:text-orange-200">Account</div>
          <div className="cursor-pointer hover:text-orange-200">Logout</div>
        </div>
      </div>

      {/* Main Content */}
      <main className="w-[80%] h-full bg-white p-6">
        <div className="navbar mb-4">
          <div className="flex-1">
            <div className="flex flex-col ">
              <p className="text-3xl font-bold">Hello User,</p>
              <p className="text-xl">
                Good Evening, Embrace the day with enthusiasm and purpose! 😁
              </p>
            </div>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                   <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View list
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src={avatar} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink>Settings</NavLink>
                </li>
                <li>
                  <NavLink>Logout</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Wallet Card */}
        <div className="bg-black text-white p-4 rounded-xl w-full relative h-[20%]">
          <div className="text-2xl">Wallet Balance</div>
          <div className="text-2xl mt-2">10000</div>
          <button className=" bg-orange-500 rounded-md p-2 absolute top-[35%] right-[5%]">
            Fund wallet
          </button>
        </div>

        {/* Tabs */}
        <div className="hidden md:flex mt-6 gap-4">
          {["Wallet", "Other Services", "Coupons", "Bill Management"].map(
            (tab) => (
              <div
                key={tab}
                className="bg-black flex-wrap md:flex-1  text-white px-4 py-2 rounded cursor-pointer"
              >
                {tab}
              </div>
            )
          )}
        </div>

        {/* Transactions Section */}
        <section className="my-3 p-4 rounded-xl  h-auto">
          <Outlet></Outlet>
   {   location.pathname === '/home' ?    <div className="flex flex-col justify-center text-center items-center h-[70vh] ">
            <div>
              <img src={Nothing} alt="receipt" className="mx-auto w-auto" />
            </div>
         
            <p className="text-gray-500 text-3xl">
              You are yet to make a transaction buddy
              <br />
              Start amplifying your bills today!
            </p>
          </div> : ""}
          {/* <Loader></Loader> */}
        </section>
      </main>
    </div>
  );
};

export default Home;
