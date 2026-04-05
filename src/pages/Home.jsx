import Hero from "../components/home/Hero";
import GoldRate from "../components/home/GoldRate";
import Categories from "../components/home/Categories";
import ProductCard from "../components/home/ProductCard";
import { products } from "../data/products";

function Home() {
  return (
    <div className="bg-dark">
      <Hero />
      <GoldRate />
      <Categories />

      {/* Featured Products */}
      <section id="products" className="py-20 px-6 md:px-16">
        <div className="text-center mb-14">
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-body">
            Handpicked Pieces
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-white mt-3">
            Featured Products
          </h2>
          <div className="w-20 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Trust banner */}
      <section className="border-y border-gold/20 py-14 px-6 md:px-16">
        <div className="grid grid-cols-3 max-w-3xl mx-auto gap-8 text-center">
          <div>
            <p className="font-heading text-3xl text-gold">100%</p>
            <p className="font-body text-cream/60 text-sm tracking-wider mt-1">Pure Tunch Gold</p>
          </div>
          <div>
            <p className="font-heading text-3xl text-gold">BIS</p>
            <p className="font-body text-cream/60 text-sm tracking-wider mt-1">Hallmark Certified</p>
          </div>
          <div>
            <p className="font-heading text-3xl text-gold">100+</p>
            <p className="font-body text-cream/60 text-sm tracking-wider mt-1">Happy Families</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
