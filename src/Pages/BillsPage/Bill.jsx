import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Bill = ({ filteredData, handleTotalPaid, available }) => {
  const { id, icon, organization, amount, due_date } = filteredData;
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const paidStatus = localStorage.getItem(`paid-${id}`);
    if (paidStatus === "true") {
      setIsDisabled(true);
    }
  }, [id]);

  const handlePay = () => {
    if (available - amount < 0) {
      toast("Insufficient balance. Can't pay more.");
      return;
    }

    toast(`🦄 Paid ${amount} to ${organization} successfully!`);
    setIsDisabled(true);
    localStorage.setItem(`paid-${id}`, "true");
    handleTotalPaid(amount);
  };

  return (
    <div key={id} className="card text-white shadow-lg bg-white">
      <div className="h-[50%]">
        <figure className="px-10 pt-10">
          <img
            src={icon}
            alt={organization || "Bill Icon"}
            className="rounded-xl"
          />
        </figure>
      </div>
      <div className="card-body items-center text-center">
        <h2 className="text-blue-900 text-3xl card-title">{organization}</h2>
        <div className="flex w-full px-4 text-black text-xl flex-col gap-3">
          <div>Amount: {amount}</div>
          <div>Due: {due_date}</div>
        </div>
        <div className="card-actions w-full">
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
          <button
            onClick={handlePay}
            disabled={isDisabled || available - amount < 0}
            className={`btn w-full rounded-lg ${
              isDisabled || available - amount < 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-700 text-white"
            }`}
          >
            {isDisabled ? "Paid" : "Pay Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bill;
