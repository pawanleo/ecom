import "./App.css";

import Header from "./components/Header";
import AllProducts from "./components/AllProducts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartProducts from "./components/CartProducts";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import PersonalDetails from "./components/PersonalDetails";
import Address from "./components/Address";
import PaymentDetails from "./components/PaymentDetails";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/Details" element={<PersonalDetails/>} />
        <Route exact path="/Address" element={<Address/>} />
        <Route exact path="/Payment" element={<PaymentDetails/>} />
        <Route exact path="/Allproducts" element={
          <ProtectedRoutes>
         <AllProducts/>
        </ProtectedRoutes>} />
        <Route exact path="/cartProducts" element={
         <ProtectedRoutes>
      <CartProducts />
        </ProtectedRoutes>} />
        <Route exact path="/productsDetails" element={
         <ProtectedRoutes>
         <ProductDetails/>
        </ProtectedRoutes>}/>
      </Routes>
    </Router>
  );
}

export default App;
