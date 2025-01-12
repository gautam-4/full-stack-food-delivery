import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import axios from 'axios'
import { StoreContext } from '../../Context/StoreContext';
import { assets } from '../../assets/assets';

const MyOrders = () => {
  const [data, setData] = useState([]);  // Initialize with empty array
  const { url, token } = useContext(StoreContext);

  const fetchOrders = async () => {
    try {
      const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
      setData(response.data.data || []); // Ensure data is an array
    } catch (error) {
      console.error('Error fetching orders:', error);
      setData([]); // Set empty array on error
    }
  }

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token, url]); // Added url to dependencies

  return (
    <div className='my-orders'>
      <h2>My Orders</h2>
      <div className="container">
        {data?.map((order, index) => (
          <div key={index} className='my-orders-order'>
            <img src={assets.parcel_icon} alt="" />
            <p>
              {order.items?.map((item, index) => (
                index === order.items.length - 1
                  ? `${item.name} x ${item.quantity}`
                  : `${item.name} x ${item.quantity}, `
              ))}
            </p>
            <p>${order.amount}.00</p>
            <p>Items: {order.items?.length}</p>
            <p><span>&#x25cf;</span> <b>{order.status}</b></p>
            <button>Track Order</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyOrders