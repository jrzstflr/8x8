import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [data, setData] = useState("Loading...");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/message") // Fetch data from Python backend
      .then((response) => setData(response.data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
      </main>
      <Footer />
    </div>
  );
};

export default App;
