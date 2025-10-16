import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function RecipeDetail() {
  const { id } = useParams(); // Get recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch data from local data.json (make sure it's in your public folder)
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((item) => item.id.toString() === id);
        setRecipe(selectedRecipe);
      });
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-500 mt-10">Loading recipe details...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/" className="text-blue-500 hover:underline mb-4 block">&larr; Back to Home</Link>

      <h1 className="text-3xl font-bold mb-4 text-gray-800">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg shadow mb-6"
      />

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-600">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>
    </div>
  );
}

export default RecipeDetail;
