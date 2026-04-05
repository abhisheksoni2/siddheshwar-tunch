import { useState, useEffect } from "react";

function GoldRate() {
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchRates = async () => {
    try {
      const res = await fetch("https://api.metals.live/v1/spot");
      const data = await res.json();

      const gold = data.find((m) => m.gold !== undefined);

      // USD to INR approximate rate
      const usdToInr = 84.5;

      if (gold) {
        const goldUsd = gold?.gold || 0;

        // Convert to INR per 10 grams (1 troy oz = 31.1035g)
        const goldPer10g = Math.round((goldUsd * usdToInr * 10) / 31.1035);

        // Fetch silver separately for reliability
        let silverPerKg = 232600; // fallback MCX silver rate
        try {
          const silverRes = await fetch("https://api.metals.live/v1/spot/silver");
          const silverData = await silverRes.json();
          const silverUsd = Array.isArray(silverData)
            ? (silverData[0]?.silver ?? silverData[0]?.price ?? 0)
            : (silverData?.silver ?? silverData?.price ?? 0);
          if (silverUsd > 0) {
            silverPerKg = Math.round((silverUsd * usdToInr * 1000) / 31.1035);
          }
        } catch {
          // If separate silver fetch also fails, try from original data
          const silver = data.find((m) => m.silver !== undefined);
          if (silver?.silver > 0) {
            silverPerKg = Math.round((silver.silver * usdToInr * 1000) / 31.1035);
          }
        }

        setRates({
          gold24k: goldPer10g,
          gold22k: Math.round(goldPer10g * 0.9167),
          silver: silverPerKg,
          goldUsd: goldUsd.toFixed(2),
        });
        setLastUpdated(new Date());
      }
    } catch {
      // Fallback to approximate MCX rates if API fails
      setRates({
        gold24k: 149650,
        gold22k: 137150,
        silver: 232600,
        goldUsd: "5500.00",
      });
      setLastUpdated(new Date());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRates();
    const interval = setInterval(fetchRates, 60000); // refresh every 60s
    return () => clearInterval(interval);
  }, []);

  const formatPrice = (num) => num?.toLocaleString("en-IN") || "—";

  return (
    <section className="bg-gradient-to-b from-dark to-black py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-body">
            Today's Market
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-white mt-3">
            Live Gold & Silver Rates
          </h2>
          <div className="w-20 h-px bg-gold mx-auto mt-4" />
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block w-10 h-10 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
            <p className="font-body text-cream/50 mt-4 text-sm tracking-wider">
              Fetching latest rates...
            </p>
          </div>
        ) : (
          <>
            {/* Rate cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Gold 24K */}
              <div className="group relative bg-dark-card border border-gold/20 rounded-xl p-8 text-center hover:border-gold/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.1)] overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
                <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥇</span>
                </div>
                <p className="font-body text-cream/40 text-xs tracking-[0.25em] uppercase mb-3">
                  Gold 24K (per 10g)
                </p>
                <p className="font-heading text-3xl md:text-4xl text-gold">
                  ₹{formatPrice(rates?.gold24k)}
                </p>
                <p className="font-body text-cream/30 text-xs mt-2">
                  999 Purity
                </p>
              </div>

              {/* Gold 22K */}
              <div className="group relative bg-dark-card border border-gold/20 rounded-xl p-8 text-center hover:border-gold/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.1)] overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-light to-transparent" />
                <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <p className="font-body text-cream/40 text-xs tracking-[0.25em] uppercase mb-3">
                  Gold 22K (per 10g)
                </p>
                <p className="font-heading text-3xl md:text-4xl text-gold-light">
                  ₹{formatPrice(rates?.gold22k)}
                </p>
                <p className="font-body text-cream/30 text-xs mt-2">
                  916 Hallmark
                </p>
              </div>

              {/* Silver */}
              <div className="group relative bg-dark-card border border-gold/20 rounded-xl p-8 text-center hover:border-gold/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.1)] overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥈</span>
                </div>
                <p className="font-body text-cream/40 text-xs tracking-[0.25em] uppercase mb-3">
                  Silver (per kg)
                </p>
                <p className="font-heading text-3xl md:text-4xl text-white">
                  ₹{formatPrice(rates?.silver)}
                </p>
                <p className="font-body text-cream/30 text-xs mt-2">
                  999 Purity
                </p>
              </div>
            </div>

            {/* Footer info */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-4 border-t border-gold/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <p className="font-body text-cream/40 text-xs tracking-wider">
                  {lastUpdated
                    ? `Last updated: ${lastUpdated.toLocaleTimeString("en-IN")} • Auto-refreshes every 60s`
                    : "Updating..."}
                </p>
              </div>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://www.moneycontrol.com/commodity/mcx-gold-price/?type=futures&exp=2026-06-05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-gold/70 hover:text-gold text-xs tracking-[0.15em] uppercase transition-colors duration-300"
                >
                  Gold MCX Rates →
                </a>
                <a
                  href="https://www.moneycontrol.com/commodity/mcx-silver-price/?type=futures&exp=2026-05-05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-cream/50 hover:text-white text-xs tracking-[0.15em] uppercase transition-colors duration-300"
                >
                  Silver MCX Rates →
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default GoldRate;
