import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./features/home/Home";
import TopBanner from "./layout/TopBanner";
import Header from "./layout/Header";

function App() {
  return (
    <BrowserRouter>
      <TopBanner />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;