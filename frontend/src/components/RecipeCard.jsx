import { useNavigate } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";
import { formatDate } from "../lib/utils";

function VegIcon() {
  return (
    <div className="w-6 h-6 flex items-center justify-center">
      <div className="w-5 h-5 border-2 border-green-600 flex items-center justify-center">
        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
      </div>
    </div>
  );
}

function NonVegIcon() {
  return (
    <div className="w-6 h-6 flex items-center justify-center">
      <div className="w-5 h-5 border-2 border-red-600 flex items-center justify-center">
        <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-b-[6px] border-transparent border-b-red-600"></div>
      </div>
    </div>
  );
}

function DessertIcon() {
  return (
    <div className="w-6 h-6 flex flex-col justify-center items-center gap-0.5">
      <div className="w-4 h-0.5 bg-orange-400"></div>
      <div className="w-5 h-0.5 bg-orange-500"></div>
      <div className="w-6 h-0.5 bg-orange-400"></div>
    </div>
  );
}

function RecipeCard({ recipe, onDelete }) {
  const navigate = useNavigate();

  return (
    <article className="w-full bg-base-100 shadow hover:shadow-lg transition h-full p-4 border rounded-none cursor-pointer" onClick={() => navigate(`/recipe/${recipe._id}`)}>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-start gap-2">
          <h3 className="card-title flex-1 flex items-center gap-2">
            <span className="text-primary text-lg">🍲</span>
            {recipe.title}
          </h3>
          <div className="flex items-center gap-1 badge badge-sm flex-shrink-0 pointer-events-none">
            {recipe.category === "Veg" ? <VegIcon /> : recipe.category === "Dessert" ? <DessertIcon /> : <NonVegIcon />}
            <span>{recipe.category}</span>
          </div>
        </div>

        <p className="text-sm text-neutral">{recipe.description}</p>

        <div className="flex flex-wrap gap-2 mt-2">
          <div className="badge badge-accent">{recipe.difficulty}</div>
          <div className="badge badge-secondary flex items-center gap-2">
            <span className="text-current text-sm">⏱️</span>
            <span>{recipe.cookingTime} mins</span>
          </div>
        </div>

        <div className="mt-3 text-xs text-neutral">
          <div>Created: {formatDate(recipe.createdAt)}</div>
          {recipe.updatedAt && recipe.updatedAt !== recipe.createdAt && (
            <div>Updated: {formatDate(recipe.updatedAt)}</div>
          )}
        </div>

        <div className="card-actions justify-end mt-auto pointer-events-auto" onClick={(e) => e.stopPropagation()}>
          <button className="btn btn-sm btn-outline gap-2" onClick={() => navigate(`/update/${recipe._id}`)}>
            <Pencil size={14} /> Edit
          </button>
          <button className="btn btn-sm btn-error" onClick={() => onDelete(recipe._id)}>
            <Trash2 size={14} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default RecipeCard;
