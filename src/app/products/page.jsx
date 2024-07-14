import Link from "next/link";

//request
const getData = async () => {
  const request = await fetch("https://dummyjson.com/recipes");

  const data = await request.json();

  return data;
};

async function Products() {
  const { recipes } = await getData();
  return (
    <div className="container mx-auto p-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {recipes.map((recipe) => {
          return (
            <div key={recipe.id}>
              <Link href={`/singleProduct/${recipe.id}`}>
                <div className="card bg-base-300 shadow-xl">
                  <figure>
                    <img src={recipe.image} alt="img" />
                  </figure>
                  <div className="card-actions justify-end mt-5 mx-5">
                    <div className="badge badge-outline">
                      Difficulty: {recipe.difficulty}
                    </div>
                  </div>
                  <div className="card-body">
                    <h2 className="card-title">
                      {recipe.name}
                      <div className="badge badge-secondary">
                        {recipe.cuisine}
                      </div>
                    </h2>
                    <p>Ingredients: {recipe.ingredients}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">How to Cook?</button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
