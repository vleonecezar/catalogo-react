import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Produtos from "./Components/Produtos";
import Produto from "./Components/Produto";
import Contato from "./Components/Contato";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Produtos />} />
          <Route path="produto/:id" element={<Produto />} />
          <Route path="contato" element={<Contato />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
