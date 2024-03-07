import React, { useEffect, useState } from "react";
import "./ProdList.css";

export default function ProductList() {
  const [data, setData] = useState([]);

  // read
  const fetchData = () => {
    fetch("http://localhost:3000/dataMakanan ")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // delete
  const handleDelete = async (id) => {
    try {
      // Make a DELETE request to the JSON Server
      await fetch(`http://localhost:3000/dataMakanan/${id}`, {
        method: "DELETE",
      });

      // Fetch the updated list
      const response = await fetch("http://localhost:3000/dataMakanan");
      const updatedData = await response.json();
      setData(updatedData);
    } catch (error) {
      console.error("Error deleting food:", error);
    }
  };

  return (
    <div>
      <div className="ProdList">
        {data.length > 0 && (
          <ul>
            {data.map((data) => (
              <li key={data.id}>
                <img src={data.gambar} alt="" />
                <div className="deskripsi">
                  <h2>{data.nama}</h2>
                  <p>Rp{data.harga}</p>
                  <p>{data.deskripsi}</p>
                </div>

                <button
                  onClick={() => handleDelete(data.id)}
                  className="delete"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
