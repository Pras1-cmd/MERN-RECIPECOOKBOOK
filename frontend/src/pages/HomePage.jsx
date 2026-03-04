import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import API from "../lib/axios";
import RecipeCard from "../components/RecipeCard";
import Loader from "../components/Loader";
import RecipeNotFound from "../components/RecipeNotFound";

function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetchRecipes();
  }, [search, category]);

  const fetchRecipes = async () => {
    try {
      setLoading(true);
      const res = await API.get(`/?search=${encodeURIComponent(search)}&category=${encodeURIComponent(category)}`);
      setRecipes(res.data.recipes || []);
      setTotal(res.data.total || (res.data.recipes || []).length);
    } catch (e) {
      toast.error("Failed to load recipes");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this recipe?")) return;
    try {
      await API.delete(`/${id}`);
      toast.success("Recipe deleted");
      fetchRecipes();
    } catch (e) {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="app-container">
      <div className="flex items-center justify-start mb-6">
        <h1 className="text-3xl font-bold">All Recipes</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <input
          className="input input-bordered w-full md:col-span-2"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select className="select select-bordered w-full" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All</option>
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

      <p className="mb-4 text-sm text-neutral">Total Recipes: {total}</p>

      {loading ? (
        <Loader />
      ) : recipes.length === 0 ? (
        <RecipeNotFound />
      ) : (
        <div className="space-y-4">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe._id}
              recipe={recipe}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
