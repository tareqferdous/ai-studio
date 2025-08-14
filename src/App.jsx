import { useState } from "react";
import "./App.css";
import Glow from "./components/Glow";
import Header from "./components/Header";
import DownloadPage from "./pages/DownloadPage";
import HomePage from "./pages/HomePage";

function App() {
  const [currentPage, setCurrentPage] = useState("create");
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Header setCurrentPage={setCurrentPage} />
        <Glow />
        {currentPage === "create" ? <HomePage /> : <DownloadPage />}
      </div>
    </div>
  );
}

export default App;
