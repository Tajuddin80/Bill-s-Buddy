import React from "react";
import { Bell, User } from "lucide-react";
import Nothing from "../../assets/nothing.png";
import { NavLink } from "react-router";
import "./Home.css";
const Home = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-[20%] bg-orange-600 text-white flex flex-col p-4">
        <div className="text-4xl font-bold mb-8">Bill's Buddy</div>
        <nav className="space-y-4">
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
            <li>
              <NavLink
                to={item}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </nav>
        <div className="mt-auto space-y-4">
          <div className="cursor-pointer hover:text-orange-200">Account</div>
          <div className="cursor-pointer hover:text-orange-200">Logout</div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-[80%] bg-white p-6">
        <header className="flex justify-between items-center border-b pb-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold">Hello User,</h1>
            <p className="text-sm text-gray-500">
              Good Evening, Embrace the day with enthusiasm and purpose! 🥳
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="w-6 h-6" />
            <User className="w-6 h-6" />
          </div>
        </header>

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
        <section className="mt-10 text-center flex flex-col justify-center items-center">
          <img src={Nothing} alt="receipt" className="mx-auto w-32" />
          <h2 className="text-4xl font-bold mt-4">Sorry Buddy</h2>
          <p className="text-gray-500 text-2xl">
            You are yet to make a transaction buddy
            <br />
            Start amplifying your bills today!
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
