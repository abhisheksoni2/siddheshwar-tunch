import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&q=80"
        alt="Jewellery"
        className="w-full h-full object-cover scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
        <span className="text-gold-light text-sm tracking-[0.4em] uppercase font-body mb-4 animate-pulse">
          — Since 2025 —
        </span>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-center leading-tight mb-4">
          Shree Siddheshwar
        </h1>
        <h2 className="font-heading text-2xl md:text-3xl text-gold tracking-wide mb-6">
          Tunch & Jewellers
        </h2>

        <p className="font-body text-cream/80 text-lg md:text-xl tracking-wider max-w-lg text-center mb-10">
          Where tradition meets timeless elegance. Crafting stories in gold & silver.
        </p>

        <div className="flex gap-4">
          <Link
            to="/#collections"
            className="px-8 py-3 bg-gold text-black font-body text-sm tracking-[0.2em] uppercase hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
          >
            Explore Collections
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 border border-gold/60 text-gold font-body text-sm tracking-[0.2em] uppercase hover:bg-gold/10 transition-all duration-300"
          >
            Visit Store
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-cream/50 text-xs tracking-widest uppercase font-body">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}

export default Hero;
