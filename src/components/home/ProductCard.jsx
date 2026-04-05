function ProductCard({ item }) {
  return (
    <div className="group bg-dark-card rounded-lg overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-[0_8px_40px_rgba(212,175,55,0.15)]">
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="absolute top-4 left-4 bg-gold/90 text-black text-xs tracking-[0.15em] uppercase px-3 py-1 font-body opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          {item.tag || "New"}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-heading text-lg text-white group-hover:text-gold transition-colors duration-300">
          {item.name}
        </h3>
        <p className="font-body text-cream/50 text-sm mt-1">{item.category}</p>
        <div className="flex items-center justify-between mt-3">
          <p className="font-heading text-xl text-gold">
            ₹{item.price.toLocaleString("en-IN")}
          </p>
          <span className="text-cream/40 group-hover:text-gold text-xs tracking-widest uppercase font-body transition-colors duration-300">
            View →
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
