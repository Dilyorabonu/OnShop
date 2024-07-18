import React from "react";

function Home() {
  return (
    <>
      <div className="text-white min-h-screen flex flex-col">
        <header className="py-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to OnShop</h1>
          <p className="text-xl">
            Your go-to place for delicious recipes from around the world.
          </p>
        </header>
        <section className="flex-grow py-10">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Our Featured Recipes
          </h2>
          <div className="grid gap-8 md:grid-cols-3 px-4 md:px-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src=""
                alt="Classic Margherita Pizza"
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">
                Classic Margherita Pizza
              </h3>
              <p>A timeless Italian classic with fresh mozzarella and basil.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src=""
                alt="Vegetarian Stir-Fry"
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Vegetarian Stir-Fry</h3>
              <p>A vibrant mix of tofu and vegetables with Asian flavors.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src=""
                alt="Chocolate Chip Cookies"
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">
                Chocolate Chip Cookies
              </h3>
              <p>
                Classic American cookies with a chewy texture and rich chocolate
                chips.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
