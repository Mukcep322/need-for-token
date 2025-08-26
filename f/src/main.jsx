import {createRoot} from "react-dom/client"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Provider} from "react-redux"

import {Header, Container} from "./components/shared/index.jsx"

import App from "./pages/MainPage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import RegisterPage from "./pages/RegisterPage.jsx"
import Market from "./pages/MarketPage.jsx"

import store from "./redux/store.js"

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Container className="flex items-center text-white fixed z-100">
        <Header />
      </Container>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/market" element={<Market />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
