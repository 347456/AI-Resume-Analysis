import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadResume from "./pages/UploadResume";
import Home from "./pages/Home";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<UploadResume />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;