import React from "react";
import { Link } from "react-router";

const Bill = ({ filteredData }) => {
  const { id, icon, organization, amount, due_date } = filteredData;

  return (
    <div key={id} className="card text-white shadow-lg bg-white">
      <div className="h-[50%]"><figure className=" px-10 pt-10">
        <img src={icon} alt={organization || "Bill Icon"} className="rounded-xl" />
      </figure></div>
      <div className="card-body items-center text-center">
        <h2 className="text-blue-900 text-3xl card-title">{organization}</h2>
        <div className="flex w-full px-4 text-black text-xl flex-col gap-3">
          <div >Amount: {amount}</div>
          <div>Due: {due_date}</div>
        </div>
        <div className="card-actions">
          <Link to={`/pay/${id}`} className="btn bg-blue-700 text-white rounded-lg">
            Pay Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bill;
