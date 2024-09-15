import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./Pages/HomePage";
import Team from "./Pages/Team";
import Enterprise from "./Pages/Enterprise";
import Education from "./Pages/Education";
import Pricing from "./Pages/Pricing";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/education" element={<Education />} />
          <Route path="/pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
