import { Routes, Route } from "react-router-dom";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Main } from "../components/Main";
import { Pricing } from "../components/Pricing";

export const ReactRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};