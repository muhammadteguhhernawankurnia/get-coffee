import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profil";
import Product from "./pages/Product";
import ForgetPassword from "./pages/ForgetPassword/index";
import ProductDetail from "./pages/ProductDetail/index";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/product" element={<Product />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="/productdetail" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
