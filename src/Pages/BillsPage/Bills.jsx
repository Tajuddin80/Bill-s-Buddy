import React, { useEffect, useState } from "react";
import { useLoaderData, useOutletContext, useParams } from "react-router";
import Bill from "./Bill";
import { Helmet } from "react-helmet-async";

const Bills = () => {
  const data = useLoaderData();
  const { dynamic } = useParams();
  const { handleTotalPaid, available } = useOutletContext();

  const [filteredBills, setFilteredBills] = useState([]);

  useEffect(() => {
    const filtered = data.filter((d) => d.bill_type === dynamic);
    setFilteredBills(filtered);
  }, [data, dynamic]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-5">
       <Helmet><title>Bill's Buddy | Bill's Page</title></Helmet>
      {filteredBills.map((item) => (
        <Bill
          key={item.id}
          filteredData={item}
          handleTotalPaid={handleTotalPaid}
          available={available}
        />
      ))}
    </div>
  );
};

export default Bills;
