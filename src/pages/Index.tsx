import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import SpecsBanner from '@/components/SpecsBanner';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';

const dapurNgebulFeatures = [
  'Render App — rendering video cepat & ringan',
  'Visual Edit — edit video dengan tampilan visual',
  'Album Video Merger — gabung video jadi album',
  'MP3 Full Album — konversi & gabung audio album lengkap',
  'Download Full Album / Satuan — dari YouTube, SoundCloud & sumber MP3 lainnya secara masal',
];

const videoColaseFeatures = [
  'Buat Video Short YouTube dengan mudah',
  'Download Masal Video dari Sosmed (TikTok, IG, FB, dll)',
  'Edit Masal Video — batch editing otomatis',
  'Edit Manual Preview — preview sebelum export',
  'Koran Tempel Video Edit — tinggal klik-klik mouse',
  'Video Musang — generate dari video lokal, edit cepat langsung jadi',
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      <AdBanner />

      <section id="products" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-center text-foreground mb-4">
            💻 Produk Kami
          </h2>
          <p className="text-center text-muted-foreground font-body mb-12">
            Tools khusus PC. Harga terjangkau, fitur lengkap.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <ProductCard
              title="App Dapur Ngebul"
              price="Rp 100.000"
              features={dapurNgebulFeatures}
            />
            <ProductCard
              title="App Video Colase"
              price="Rp 100.000"
              features={videoColaseFeatures}
              highlight
            />
          </div>
        </div>
      </section>

      <AdBanner />

      <SpecsBanner />

      <AdBanner />

      <Footer />
    </div>
  );
};

export default Index;
