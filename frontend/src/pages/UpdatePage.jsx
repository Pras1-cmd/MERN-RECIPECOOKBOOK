import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../lib/axios";
import { toArrayFromCSV } from "../lib/utils";

function UpdatePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    ingredients: "",
    instructions: "",
    category: "",
    cookingTime: "",
    difficulty: ""
  });

  useEffect(() => {
    fetchRecipe();
  }, []);

  const fetchRecipe = async () => {
    try {
      const res = await API.get(`/recipes/${id}`);
      const data = res.data;
      setForm({
        title: data.title || "",
        description: data.description || "",
        ingredients: (data.ingredients || []).join(', '),
        instructions: (data.instructions || []).join(', '),
        category: data.category || "",
        cookingTime: data.cookingTime || "",
        difficulty: data.difficulty || ""
      });
    } catch (e) {
      toast.error("Failed to load recipe");
    }
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/recipes/${id}`, {
        title: form.title,
        description: form.description,
        ingredients: toArrayFromCSV(form.ingredients),
        instructions: toArrayFromCSV(form.instructions),
        category: form.category,
        cookingTime: Number(form.cookingTime),
        difficulty: form.difficulty
      });
      toast.success("Recipe updated");
      navigate("/");
    } catch (e) {
      toast.error("Update failed");
    }
  };

  const handleDelete = async () => {
    if (!confirm("Delete this recipe?")) return;
    try {
      await API.delete(`/recipes/${id}`);
      toast.success("Recipe deleted");
      navigate("/");
    } catch (e) {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="app-container">
      <div className="max-w-2xl mx-auto">
        <div className="card bg-base-200 shadow-lg">
          <div className="card-body">
            <div className="flex justify-between items-center mb-6">
              <h2 className="card-title text-3xl">Update Recipe</h2>
              <button className="btn btn-sm btn-ghost" onClick={() => navigate(-1)}>← Back</button>
            </div>
            <form className="space-y-5" onSubmit={handleSubmit}>
          <input name="title" className="input input-bordered w-full" placeholder="Title" value={form.title} onChange={handleChange} required />
          <textarea name="description" className="textarea textarea-bordered w-full" placeholder="Description" value={form.description} onChange={handleChange} rows={3} />
          <input name="ingredients" className="input input-bordered w-full" placeholder="Ingredients (comma separated)" value={form.ingredients} onChange={handleChange} required />
          <input name="instructions" className="input input-bordered w-full" placeholder="Instructions (comma separated)" value={form.instructions} onChange={handleChange} required />
          <select name="category" className="select select-bordered w-full" value={form.category} onChange={handleChange} required>
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
            <option value="Dessert">Dessert</option>
          </select>
          <input name="cookingTime" type="number" className="input input-bordered w-full" placeholder="Cooking time (mins)" value={form.cookingTime} onChange={handleChange} required />
          <select name="difficulty" className="select select-bordered w-full" value={form.difficulty} onChange={handleChange} required>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
              <div className="flex gap-3 mt-6">
                <button className="btn btn-secondary flex-1" type="submit">Update Recipe</button>
                <button className="btn btn-error" type="button" onClick={handleDelete}>Delete</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdatePage;
