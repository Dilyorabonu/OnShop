"use client"; // This marks the component as a Client Component

import Link from "next/link";
import { useState, useEffect } from "react";

// Fetch data from the API
const getData = async (id) => {
  try {
    const request = await fetch(`https://dummyjson.com/recipes/${id}`);
    const data = await request.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw new Error("Failed to fetch data");
  }
};

// Fetch related recipes
const getRelatedRecipes = async () => {
  try {
    const request = await fetch("https://dummyjson.com/recipes");
    const data = await request.json();
    return data.recipes.slice(0, 3); // Get the first 3 recipes
  } catch (error) {
    console.error("Failed to fetch related recipes:", error);
    return [];
  }
};

const Product = ({ params }) => {
  const [recipe, setRecipe] = useState(null);
  const [relatedRecipes, setRelatedRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const recipeData = await getData(params.id);
        const relatedData = await getRelatedRecipes();
        setRecipe(recipeData);
        setRelatedRecipes(relatedData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <>
      <div className="mb-5">
        <Link className="link text-2xl" href="/products">
          Go Back
        </Link>
      </div>
      <div className="card lg:card-side bg-gray-900 shadow-xl mb-10">
        <figure>
          <img
            src={recipe.image}
            alt="meal"
            className="w-full h-auto object-cover"
          />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-end">
            <div className="badge badge-outline">
              Prep: {recipe.prepTimeMinutes}min
            </div>
            <div className="badge badge-outline">
              Cook: {recipe.cookTimeMinutes}min
            </div>
          </div>
          <h2 className="card-title">
            {recipe.name}
            <div className="badge badge-secondary">For {recipe.mealType}</div>
          </h2>
          <p>Rating: {recipe.rating}</p>
          <div>
            <p>What do we need?</p>
            <p>{recipe.ingredients}</p>
          </div>
          <p>Review Count: {recipe.reviewCount}</p>
          <div>
            <p>Instructions:</p>
            <p>{recipe.instructions}</p>
          </div>
          <p>Calories: {recipe.caloriesPerServing} Per Serving</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
      <h2 className="text-3xl font-bold mb-4">Related Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        {relatedRecipes.map((related) => (
          <div
            key={related.id}
            className="bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <Link href={`/singleProduct/${related.id}`}>
              <div className="block overflow-hidden rounded-lg cursor-pointer">
                <img
                  src={related.image}
                  alt={related.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-white">
                      {related.name}
                    </h2>
                    <div className="badge badge-secondary">
                      {related.cuisine}
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">
                    Ingredients: {related.ingredients}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="badge badge-outline">
                      Difficulty: {related.difficulty}
                    </div>
                    <button className="btn btn-primary">How to Cook?</button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
