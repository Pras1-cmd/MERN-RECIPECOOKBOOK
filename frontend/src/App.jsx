import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";
import RecipeDetailPage from "./pages/RecipeDetailPage";

function App() {
  return (
    <div className="bg-base-100 text-base-content min-h-screen">
      <Toaster position="top-center" />
      <Router>
        <Navbar />
        <main className="app-container py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/update/:id" element={<UpdatePage />} />
            <Route path="/recipe/:id" element={<RecipeDetailPage />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;