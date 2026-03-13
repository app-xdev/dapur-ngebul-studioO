const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const isFriday = new Date().getDay() === 5;

  return (
    <section className="hero-gradient py-20 px-4 md:py-32 text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #ff6a00, transparent)' }} />
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #ee0979, transparent)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #ffd700, transparent)' }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-5xl md:text-7xl mb-2 animate-bounce inline-block">🏎️💨🔥</div>
        <p className="text-xl md:text-2xl font-black mb-4" style={{ color: '#ffd93d', textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
          dan GASS!!! Jadi youtuber hebat dengan app
        </p>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
          <span style={{
            background: 'linear-gradient(90deg, #ff6b6b, #ffd93d, #6bcb77, #4d96ff, #c77dff, #ff6bcd)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'inline',
            filter: 'drop-shadow(0 2px 8px rgba(255,200,0,0.3))'
          }}>
            Edit Video Masal &amp; Render Cepat
          </span>
          <br />
          <span style={{
            background: 'linear-gradient(90deg, #c77dff, #4d96ff, #6bcb77, #ffd93d, #ff6b6b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'inline',
            filter: 'drop-shadow(0 2px 8px rgba(255,100,100,0.3))'
          }}>
            di PC Low-End
          </span>
        </h1>

        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto font-semibold" style={{ color: '#ffe5b4', textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}>
          Tools video editing otomatis untuk YouTube Shorts, sosial media, dan konten kreator. Harga terjangkau, performa ringan.
        </p>

        <button
          onClick={scrollToProducts}
          className="text-lg font-display font-bold px-10 py-4 rounded-xl transition-all duration-200 hover:scale-105 hover:opacity-90"
          style={{
            background: 'linear-gradient(135deg, #ff6a00, #ee0979)',
            color: '#fff',
            boxShadow: '0 4px 24px rgba(238,9,121,0.5)',
          }}
        >
          {isFriday
            ? '🔥 Lihat Produk — Rp 50.000 (Promo Jumat!)'
            : '🔥 Lihat Produk — Rp 100.000'}
        </button>

        {!isFriday && (
          <p className="mt-3 text-sm font-semibold" style={{ color: '#ffd93d', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
            🗓️ Setiap hari Jumat cukup <strong>Rp 50.000</strong> saja!
          </p>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
