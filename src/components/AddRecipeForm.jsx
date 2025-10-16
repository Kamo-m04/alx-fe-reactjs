import React, { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }

    // Optionally validate ingredient count
    const ingredientList = ingredients.split(",").map((i) => i.trim());
    if (ingredientList.length < 2) {
      setError("Please enter at least two ingredients (comma separated).");
      return;
    }

    // Clear error if valid
    setError("");

    // Mock form submission
    const newRecipe = { title, ingredients: ingredientList, steps };
    console.log("New recipe added:", newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Add a New Recipe
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <p className="text-red-500 text-sm font-medium bg-red-50 p-2 rounded">
            {error}
          </p>
        )}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Ingredients (comma separated)
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-3 h-24 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="e.g. Flour, Eggs, Milk"
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Preparation Steps
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Describe how to prepare the recipe..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-200"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
