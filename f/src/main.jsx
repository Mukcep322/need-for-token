import {createRoot} from "react-dom/client"

import {BrowserRouter, Route, Routes} from "react-router-dom"

import App from "./pages/MainPage.jsx"
import Market from "./pages/Market.jsx"
import Header from "./components/Header.jsx"

createRoot(document.getElementById("root")).render(
  <div className="relative">
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Market" element={<Market />} />
      </Routes>
    </BrowserRouter>
  </div>
)
