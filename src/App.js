import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  HomePage,
  DetailsPage,
  NavBar,
  AboutPage,
  ShopCart,
  Login,
  OrderPage,
  RedirectLogin,
  PurchaseSucceeded,
} from "./components";
import { SigninForm } from "./components/SigninForm";
import { bootstrapLoginState } from "./store/users/thunks";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bootstrapLoginState);
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shopcart" element={<ShopCart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SigninForm />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/redirect" element={<RedirectLogin />} />
        <Route path="/purchaseSucceeded" element={<PurchaseSucceeded />} />
      </Routes>
    </div>
  );
}

export default App;
