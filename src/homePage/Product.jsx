import React, { useEffect, useState } from "react";
import "./product.css";
import { Link } from "react-router-dom";


const Product = () => {
  const [data, setData] = useState([]);

  // read, reveal data from database to website
  const fetchData = () => {
    fetch("http://localhost:3000/dataMakanan?_start=0&_limit=3 ")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="menu">
      <div className="contariner">
        <h2>Product</h2>

        <div className="prodBtn">
          <Link to="product">
            <button>more</button>
          </Link>
        </div>
      </div>

      {data.length > 0 && (
        <ul className="card">
          {data.map((data) => (
            <li key={data.id}>
              <img src={data.gambar} alt="" />
              <p>{data.nama}</p>
              <p>Rp{data.harga}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Product;
