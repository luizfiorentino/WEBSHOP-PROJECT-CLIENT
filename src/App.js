import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  DetailsPage,
  NavBar,
  AboutPage,
  ShopCart,
} from "./components";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shopcart" element={<ShopCart />} />
      </Routes>
    </div>
  );
}

export default App;
