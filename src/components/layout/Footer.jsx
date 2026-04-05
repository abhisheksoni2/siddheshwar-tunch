import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white mt-0">
      <div className="border-t border-gold/20" />

      <div className="px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-2xl text-gold mb-4">Shree Siddheshwar Tunch & Jewellers</h3>
          <p className="font-body text-cream/60 text-sm leading-relaxed">
            Crafting exquisite jewellery since 2025. Where every piece tells a story of tradition, purity, and timeless elegance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm tracking-[0.2em] uppercase text-cream/40 mb-4 font-body">Quick Links</h4>
          <div className="flex flex-col gap-3 font-body text-sm">
            <Link to="/" className="text-cream/70 hover:text-gold transition-colors">Home</Link>
            <Link to="/#collections" className="text-cream/70 hover:text-gold transition-colors">Collections</Link>
            <Link to="/#products" className="text-cream/70 hover:text-gold transition-colors">Products</Link>
            <Link to="/contact" className="text-cream/70 hover:text-gold transition-colors">Contact</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm tracking-[0.2em] uppercase text-cream/40 mb-4 font-body">Get In Touch</h4>
          <div className="flex flex-col gap-3 font-body text-sm">

            <p className="text-cream/70">�📍 Mirzapur, Uttar Pradesh</p>
            <a href="https://maps.app.goo.gl/GSma9rurEN5YKMxr7" target="_blank" rel="noopener noreferrer" className="text-cream/70 hover:text-gold transition-colors">
              🗺️ Open in Google Maps
            </a>
            <a href="tel:+919219024378" className="text-cream/70 hover:text-gold transition-colors">
              📞 +91-9219024378
            </a>
            <a
              href="https://wa.me/919219024378"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/70 hover:text-gold transition-colors"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/10 px-6 md:px-16 py-5 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="font-body text-cream/30 text-xs tracking-wider">
          © 2026 Shree Siddheshwar Tunch & Jewellers. All rights reserved.
        </p>
        <p className="font-body text-cream/30 text-xs tracking-wider">
          Crafted with ❤️ in Mirzapur
        </p>
      </div>
    </footer>
  );
}

export default Footer;
