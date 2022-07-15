import React, { useState, useEffect } from "react";

import { getOrders } from "./helper/coreapicalls";
import Base from "./Base";

import "../styles.css";
import Ocard from "./Ocard";

export default function Home() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProducts = () => {
    getOrders()
      .then((data) => {                               //response.json returns a promise.  
        if (data.error) {                           
          setError(data.error);
          console.log(error);
        } else {
          setOrders(data);
        }
      });
  };

  useEffect(() => {                          //useEffect is a callback and it has empty array for running this method again based on some variable.If that changes then we run again
    loadAllProducts();
  });

  return (                                  //Base here is acting like children as discussed in Base.js
    <Base title="Home Page" description="Welcome to Agriculture store">    
      <h1>Order component</h1>
      <div className="row">
        {orders.map((order, index) => {          //We are looping through products.Index is because we dont want to loop through same object again & again 
          return (
            <div key={index} className="col-4 mb-4">    
              <Ocard product_names={order.product_names} total_products={order.total_products} total_amount={order.total_amount}
              created_at ={order.created_at} />               {/* we are passing product as prop to the card component */}

            </div>
          );
        })}
      </div>
    </Base>
  );
}