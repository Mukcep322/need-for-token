import {createRoot} from "react-dom/client"

import {BrowserRouter, Route, Routes} from "react-router-dom"

import App from "./pages/MainPage.jsx"
import Market from "./pages/Market.jsx"
import Header from "./components/Header.jsx"
import Leaderboard from "./pages/Leaderboard.jsx"

createRoot(document.getElementById("root")).render(
  <div className="relative">
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Market" element={<Market />} />
        <Route path="/Leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  </div>
)
