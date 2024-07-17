import Link from "next/link";

// Fetch data from the API
const getData = async () => {
  const request = await fetch("https://dummyjson.com/recipes");
  const data = await request.json();
  return data;
};

async function Products() {
  const { recipes } = await getData();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">
        Our Recipes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <Link href={`/singleProduct/${recipe.id}`}>
              <div className="block overflow-hidden rounded-lg">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-white">
                      {recipe.name}
                    </h2>
                    <div className="badge badge-secondary">
                      {recipe.cuisine}
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">
                    Ingredients: {recipe.ingredients}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="badge badge-outline">
                      Difficulty: {recipe.difficulty}
                    </div>
                    <button className="btn btn-primary">How to Cook?</button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
