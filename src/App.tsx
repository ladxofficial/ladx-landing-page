import LandingPage from "./pages/public/LandingPage";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  const [isLoading] = useState(false);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2D1155]"></div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
