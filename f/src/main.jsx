import {createRoot} from "react-dom/client"

import {BrowserRouter, Route, Routes} from "react-router-dom"

import {Header} from "./components/shared/index.jsx"

import App from "./pages/MainPage.jsx"

createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/Market" element={<Market />} />
        <Route path="/Leaderboard" element={<Leaderboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<div>404</div>} /> */}
      </Routes>
    </BrowserRouter>
  </>
)
