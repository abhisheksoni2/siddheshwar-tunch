function Contact() {
  return (
    <div className="bg-dark min-h-screen">
      {/* Hero banner */}
      <div className="bg-dark py-16 text-center">
        <span className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-2 block">
          We'd Love to Hear From You
        </span>
        <h1 className="font-heading text-4xl md:text-6xl text-white mt-3">Contact Us</h1>
        <div className="w-20 h-px bg-gold mx-auto mt-4" />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Store info */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl text-gold mb-3">Shree Siddheshwar Tunch & Jewellers</h2>
          <p className="font-body text-cream/60 text-lg">Mirzapur, Uttar Pradesh</p>
          <p className="font-body text-cream/50 text-base mt-3">Owners: <span className="text-white">Harshit Soni</span> & <span className="text-white">Rakesh Soni</span></p>
          <div className="w-16 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <a
            href="tel:+919219024378"
            className="group relative bg-dark-card border border-gold/20 rounded-xl p-10 text-center hover:border-gold/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.1)]"
          >
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/20 transition-colors duration-300">
              <span className="text-3xl">📞</span>
            </div>
            <p className="font-body text-cream/40 text-sm tracking-[0.2em] uppercase mb-2">Call Us</p>
            <p className="font-heading text-2xl text-white group-hover:text-gold transition-colors duration-300">
              +91-9219024378
            </p>
            <p className="font-body text-cream/40 text-sm mt-3">Mon - Sat, 10AM - 8PM</p>
          </a>

          <a
            href="https://wa.me/919219024378"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-dark-card border border-gold/20 rounded-xl p-10 text-center hover:border-gold/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.1)]"
          >
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/20 transition-colors duration-300">
              <span className="text-3xl">💬</span>
            </div>
            <p className="font-body text-cream/40 text-sm tracking-[0.2em] uppercase mb-2">WhatsApp</p>
            <p className="font-heading text-2xl text-white group-hover:text-gold transition-colors duration-300">
              +91-9219024378
            </p>
            <p className="font-body text-cream/40 text-sm mt-3">Quick Response Guaranteed</p>
          </a>
        </div>

        {/* Visit us */}
        <a
          href="https://maps.app.goo.gl/GSma9rurEN5YKMxr7"
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-dark-card border border-gold/20 rounded-xl p-10 text-center hover:border-gold/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.1)] mb-12"
        >
          <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/20 transition-colors duration-300">
            <span className="text-3xl">📍</span>
          </div>
          <p className="font-body text-cream/40 text-sm tracking-[0.2em] uppercase mb-2">Visit Our Store</p>
          <p className="font-heading text-xl text-white group-hover:text-gold transition-colors duration-300 mb-2">Shree Siddheshwar Tunch & Jewellers</p>
          <p className="font-body text-cream/60">Mirzapur, Uttar Pradesh, India</p>
          <p className="font-body text-gold/60 text-xs mt-3 tracking-wider group-hover:text-gold transition-colors">
            Open in Google Maps →
          </p>
        </a>

        {/* Google Map embed */}
        <div className="rounded-xl overflow-hidden border border-gold/20">
          <iframe
            title="Shree Siddheshwar Tunch & Jewellers Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.5!2d82.5605358!3d25.1417982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fc1f945667325%3A0x9310b1ae4f664e89!2sShree%20Siddheshwar%20Tunch%20and%20Jewellers!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
