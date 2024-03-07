import "./App.css";

import Homepage from "./homePage/Homepage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ProductPage from "./productPage/ProductPage";
import Create from "./CUD/Create";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
