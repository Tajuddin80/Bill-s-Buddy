import React, { useContext, useEffect, useState } from 'react';

import PaidItem from './PaidItem';
import { AuthContext } from '../Contexts/AuthContext';
import Loader from '../Loader/Loader';


const PaidItems = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { getPaidItemIds } = useContext(AuthContext);

  useEffect(() => {
    fetch('/bills.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        // console.error('Failed to fetch bills:', err);
        setLoading(false);
      });
  }, []);

  const paidItemIds = getPaidItemIds(); // e.g., ['1', '2']

  // Convert IDs to numbers to match JSON data
  const paidItemsList = data.filter((item) =>
    paidItemIds.includes(item.id.toString())
  );

  if (loading) {
    return <Loader />
  }

  if (paidItemsList.length === 0) {
    return <p className="text-center text-red-500">No paid items found.</p>;
  }

  return (
    <>
    <h3 className='text-3xl  font-bold'>Paid Items</h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-5 bg-black  rounded-xl">
      {paidItemsList.map((item) => (
        <PaidItem key={item.id} item={item} />
      ))}
    </div>
    </>
  );
};

export default PaidItems;


