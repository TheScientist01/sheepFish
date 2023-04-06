import Layout from "./components/Layout";
import HomePage from "./pages/Home/HomePage";
import ProductsPage from "./pages/Products/ProductsPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    // <div>
    //   <ProductsPage />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="products" element={<ProductsPage />} />
        </Route>
        <Route path="home" element={<HomePage />} />
        <Route path="/" element={<Navigate to={"/home"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
