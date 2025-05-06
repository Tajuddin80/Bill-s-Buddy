import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Bill from "./Bill";

const Bills = () => {
  const data = useLoaderData();
  const { dynamic } = useParams();

  const [filteredBills, setFilteredBills] = useState([]);

  useEffect(() => {
    const filtered = data.filter((d) => d.bill_type === dynamic);
    setFilteredBills(filtered);
  }, [data, dynamic]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {filteredBills.map((item) => (
        <Bill key={item.id} filteredData={item} />
      ))}
    </div>
  );
};

export default Bills;
