import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Contato from "./Components/Contato";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
