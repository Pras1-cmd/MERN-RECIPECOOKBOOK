import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../lib/axios";
import Loader from "../components/Loader";
import { formatDate } from "../lib/utils";

function RecipeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchRecipe(); }, []);

  const fetchRecipe = async () => {
    try {
      setLoading(true);
      const res = await API.get(`/recipes/${id}`);
      setRecipe(res.data);
    } catch (e) {
      toast.error("Failed to load recipe");
    } finally { setLoading(false); }
  };

  if (loading) return <Loader />;
  if (!recipe) return <div className="text-center py-10">Recipe not found</div>;

  return (
    <div className="app-container">
      <div className="max-w-4xl mx-auto">
        <button className="btn btn-sm btn-ghost mb-6" onClick={() => navigate(-1)}>← Back</button>
        
        <div className="card bg-base-200 shadow-lg mb-6">
          <div className="card-body">
            <h2 className="card-title text-4xl mb-2">{recipe.title}</h2>
            <div className="text-sm text-neutral-600 space-y-1">
              <div>Created: {formatDate(recipe.createdAt)}</div>
              {recipe.updatedAt && recipe.updatedAt !== recipe.createdAt && (<div>Updated: {formatDate(recipe.updatedAt)}</div>)}
            </div>
          </div>
        </div>

        {recipe.description && (
          <div className="card bg-base-100 shadow mb-6">
            <div className="card-body">
              <h3 className="card-title text-lg">Description</h3>
              <p className="whitespace-pre-wrap text-base-content">{recipe.description}</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h3 className="card-title text-lg">Ingredients</h3>
              <ul className="list-disc pl-6 space-y-2">
                {recipe.ingredients.map((it, i) => <li key={i} className="text-base-content">{it}</li>)}
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h3 className="card-title text-lg">Instructions</h3>
              <ol className="list-decimal pl-6 space-y-2">
                {recipe.instructions.map((it, i) => <li key={i} className="text-base-content">{it}</li>)}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetailPage;
