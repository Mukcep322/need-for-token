import {createRoot} from "react-dom/client"
import {BrowserRouter, Route, Routes} from "react-router-dom"

import {Header, Container} from "./components/shared/index.jsx"

import App from "./pages/MainPage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import RegisterPage from "./pages/RegisterPage.jsx"
import Market from "./pages/MarketPage.jsx"

createRoot(document.getElementById("root")).render(
  <>
    <Container className="flex items-center text-white fixed z-100">
      <Header />
    </Container>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/Market" element={<Market />} />
        {/* 

        <Route path="/Leaderboard" element={<Leaderboard />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<div>404</div>} /> */}
      </Routes>
    </BrowserRouter>
  </>
)
