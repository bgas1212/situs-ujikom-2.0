import React, { useState } from "react";
import "./ProdNav.css";
import { Link } from "react-router-dom";

export default function ProductNav() {
  const [query, setQuery] = useState();

  return (
    <div>
      <div className="bar">
        <button>sort</button>
        <input
          type="search"
          className="search"
          onChange={(e) => setQuery(e.target.value)}
          size={60}
        />
        <Link to="/create">
          <button>create</button>
        </Link>
      </div>
    </div>
  );
}
