const categories = [
  {
    name: "Gold",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=400&q=80",
  },
  {
    name: "Silver",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&q=80",
  },
  {
    name: "Rings",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80",
  },
  {
    name: "Necklaces",
    image: "https://images.unsplash.com/photo-1599643478518-a858cf1fceea?w=400&q=80",
  },
  {
    name: "Bridal",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&q=80",
  },
];

function Categories() {
  return (
    <section id="collections" className="bg-dark py-20 px-6 md:px-16">
      <div className="text-center mb-14">
        <span className="text-gold text-sm tracking-[0.3em] uppercase font-body">
          Curated For You
        </span>
        <h2 className="font-heading text-4xl md:text-5xl text-white mt-3">
          Our Collections
        </h2>
        <div className="w-20 h-px bg-gold mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="group relative h-64 md:h-72 rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="font-heading text-xl text-white group-hover:text-gold transition-colors duration-300">
                {cat.name}
              </h3>
              <span className="text-cream/0 group-hover:text-cream/70 text-xs tracking-[0.2em] uppercase font-body transition-all duration-500 mt-1 block">
                View Collection →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
