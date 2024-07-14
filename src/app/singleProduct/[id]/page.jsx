import Link from "next/link";

//request
const getData = async (id) => {
  const request = await fetch("https://dummyjson.com/recipes/" + id);

  const data = await request.json();

  return data;
};

async function Product({ params }) {
  const recipe = await getData(params.id);
  return (
    <>
      <div className="mb-5">
        <Link className="link text-2xl" href="/products">
          Go Back
        </Link>
      </div>
      <div className="card lg:card-side bg-base-200 shadow-xl mb-10">
        <figure>
          <img src={recipe.image} alt="meal" />
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
            What are we need?
            <p>{recipe.ingredients}</p>
          </div>
          <p>Review Count: {recipe.reviewCount}</p>
          <div>
            Instructions: <p>{recipe.instructions}</p>
          </div>
          <p>Calories: {recipe.caloriesPerServing} Per Serving</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
