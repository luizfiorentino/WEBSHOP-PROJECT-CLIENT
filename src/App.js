import "./App.css";
import {
  HomePage,
  DetailsPage,
  NavBar,
  AboutPage,
  ShopCart,
} from "./components";
import { Routes, Route } from "react-router-dom";

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
