import "./App.css";
import { HomePage, DetailsPage, NavBar, AboutPage } from "./components";
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/detailsPage" element={<DetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
