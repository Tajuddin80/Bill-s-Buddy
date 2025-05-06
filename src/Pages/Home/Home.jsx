import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nothing from "../../assets/nothing.png";
import avatar from "../../assets/icons8-avatar.gif";
import { NavLink, Outlet, useLocation } from "react-router";
import "./Home.css";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const location = useLocation();

  const [paid, setPaid] = useState(() => {
    const stored = localStorage.getItem("totalPaid");
    return stored ? parseInt(stored) : 0;
  });

  const [paidCount, setPaidCount] = useState(() => {
    let count = 0;
    for (let key in localStorage) {
      if (key.startsWith("paid-") && localStorage.getItem(key) === "true") {
        count++;
      }
    }
    return count;
  });

  const handleTotalPaid = (amount) => {
    const newPaid = paid + parseInt(amount);
    setPaid(newPaid);
    localStorage.setItem("totalPaid", newPaid);

    const newCount = paidCount + 1;
    setPaidCount(newCount);
  };

  const initialBalance = 10000;
  const available = initialBalance - paid;

  return (
    <div className="flex h-auto">
      {/* Sidebar */}
      <div className="w-[20%] min-h-screen bg-orange-600 text-white flex flex-col p-4 rounded-xl">
        <div className="text-4xl font-bold mb-8">Bill's Buddy</div>
        <ul className="space-y-2 w-full">
          {[
            "Pay-Airtime",
            "Pay-TV-Subscription",
            "Pay-Electricity-Token",
            "Pay-Data",
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
                  `block px-4 py-2 rounded-md transition duration-200 ${
                    isActive
                      ? "bg-white text-black underline"
                      : "hover:underline"
                  }`
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
            <div className="flex flex-col">
              <p className="text-3xl font-bold">Hello User,</p>
              <p className="text-xl">
                Good Evening, Embrace the day with enthusiasm and purpose! 😁
              </p>
            </div>
          </div>
          <div className="flex-none">
            {/* Wallet icon */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-banknote-arrow-up"
                  >
                    <path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" />
                    <path d="M18 12h.01" />
                    <path d="M19 22v-6" />
                    <path d="m22 19-3-3-3 3" />
                    <path d="M6 12h.01" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                  <span className="badge badge-sm indicator-item">{paidCount}</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">{paidCount} Items</span>
                  <span className="text-info">Subtotal: ${paid}</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">View cart</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Avatar */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="User Avatar" src={avatar} />
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
                  <NavLink to="/signin">Logout</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Wallet Card */}
        <div className="bg-black text-white p-8 rounded-xl w-full relative space-y-3">
          <div className="text-4xl">Wallet Balance</div>
          <div className="text-3xl mt-2 btn">
            <span>$</span>
            <span id="available-balance">{available}</span>
          </div>
             <ToastContainer
                      position="top-right"
                      autoClose={3000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                    />
          <button onClick={()=> {
            toast("Functionality is not added yet.")

          }} className="btn bg-orange-500 text-white border-0 rounded-md p-3 absolute top-[35%] right-[5%] cursor-pointer">
            Fund wallet
          </button>
        </div>

        {/* Tabs */}
        <div className="hidden md:flex mt-6 gap-4">
          {["Wallet", "Other Services", "Bill Management"].map((tab) => (
            <div
              key={tab}
              className="bg-black flex-wrap md:flex-1 text-white px-4 py-2 rounded cursor-pointer"
            >
              {tab}
            </div>
          ))}
        </div>

        {/* Transactions Section */}
        <section className="my-3 p-4 rounded-xl h-auto">
          <Outlet context={{ handleTotalPaid, available }} />
          {location.pathname === "/home" ? (
            <div className="flex flex-col justify-center text-center items-center h-[70vh]">
              <div>
                <img src={Nothing} alt="receipt" className="mx-auto w-auto" />
              </div>
              <p className="text-gray-500 text-3xl">
                You are yet to make a transaction buddy
                <br />
                Start amplifying your bills today!
              </p>
            </div>
          ) : (
            ""
          )}
        </section>
      </main>
      <ToastContainer />
    </div>
  );
};

export default Home;
