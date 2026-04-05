import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.jpg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top info bar */}
      <div className="bg-dark text-cream text-xs tracking-widest py-2 px-6 flex justify-between items-center border-b border-gold/20">
        <a href="https://maps.app.goo.gl/GSma9rurEN5YKMxr7" target="_blank" rel="noopener noreferrer" className="hidden md:inline hover:text-gold transition-colors">
          📍 Mirzapur, Uttar Pradesh
        </a>
        <a href="tel:+919219024378" className="hidden md:inline hover:text-gold transition-colors">
          📞 +91-9219024378
        </a>
      </div>

      {/* Main nav */}
      <nav className="bg-black/95 backdrop-blur-md text-white px-6 md:px-12 py-3 flex justify-between items-center">
        <Link to="/" className="group flex items-center gap-3">
          <img src={logo} alt="STJ Logo" className="w-12 h-12 rounded-full" />
          <div>
            <h1 className="font-heading text-2xl md:text-3xl text-gold tracking-wide m-0 group-hover:text-gold-light transition-colors duration-300">
              Shree Siddheshwar
            </h1>
            <span className="text-[10px] tracking-[0.35em] uppercase text-cream/70 font-body">
              Tunch & Jewellers
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.15em] uppercase font-body">
          <Link to="/" className="text-cream/80 hover:text-gold transition-colors duration-300 py-1 border-b border-transparent hover:border-gold">
            Home
          </Link>
          <Link to="/live-rate" className="text-cream/80 hover:text-gold transition-colors duration-300 py-1 border-b border-transparent hover:border-gold">
            Price Tracker
          </Link>
          <Link to="/contact" className="text-cream/80 hover:text-gold transition-colors duration-300 py-1 border-b border-transparent hover:border-gold">
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gold text-2xl bg-transparent border-none cursor-pointer"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile nav dropdown */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div className="md:hidden fixed inset-0 z-40 bg-black/60" onClick={() => setMenuOpen(false)} />

          {/* Slide-down menu */}
          <div className="md:hidden absolute left-0 right-0 z-50 bg-black border-b border-gold/30 shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
            <div className="flex flex-col px-6 py-4 gap-1">
              <Link to="/" onClick={() => setMenuOpen(false)} style={{ color: "#ffffff" }} className="text-base tracking-[0.15em] uppercase font-body py-3 border-b border-gold/10">Home</Link>
              <Link to="/live-rate" onClick={() => setMenuOpen(false)} style={{ color: "#ffffff" }} className="text-base tracking-[0.15em] uppercase font-body py-3 border-b border-gold/10">Price Tracker</Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)} style={{ color: "#ffffff" }} className="text-base tracking-[0.15em] uppercase font-body py-3 border-b border-gold/10">Contact</Link>
            </div>
            <div className="px-6 py-4 border-t border-gold/20 flex items-center gap-5">
              <a href="tel:+919219024378" style={{ color: "#D4AF37" }} className="text-sm font-body">📞 Call</a>
              <a href="https://wa.me/919219024378" target="_blank" rel="noopener noreferrer" style={{ color: "#D4AF37" }} className="text-sm font-body">💬 WhatsApp</a>
              <a href="https://maps.app.goo.gl/GSma9rurEN5YKMxr7" target="_blank" rel="noopener noreferrer" style={{ color: "#9ca3af" }} className="text-sm font-body">📍 Map</a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
