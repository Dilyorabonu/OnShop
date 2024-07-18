function About() {
  return (
    <div className="text-white min-h-screen flex flex-col">
      <header className="py-10 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
      </header>
      <section className="flex-grow py-10 px-4 md:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p>
            At OnShop, we believe in bringing the joy of cooking to everyone.
            Our platform offers a diverse collection of recipes from different
            cuisines, ensuring that there is something for everyone. Whether
            you are a beginner or an experienced cook, you will find recipes that
            suit your skill level and taste preferences.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p>
            Our mission is to inspire people to cook at home by providing
            easy-to-follow recipes, step-by-step guides, and tips from
            professional chefs. We aim to make cooking a fun and enjoyable
            experience for all.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
