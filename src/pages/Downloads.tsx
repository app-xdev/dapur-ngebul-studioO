import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Download, ArrowLeft, LogOut } from 'lucide-react';

const downloads = [
  {
    name: 'App Dapur Ngebul',
    description: 'Render App, Visual Edit, Album Video Merger, MP3 Full Album',
    link: '#dapur-ngebul',
  },
  {
    name: 'App Video Colase',
    description: 'Download Masal, Edit Masal, Koran Tempel, Video Musang',
    link: '#video-colase',
  },
];

const Downloads = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem('member_auth') !== 'true') {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('member_auth');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-body text-sm">
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </Link>
          <h1 className="text-lg font-display font-bold text-card-foreground">Member Downloads</h1>
          <button onClick={handleLogout} className="flex items-center gap-2 text-muted-foreground hover:text-destructive transition-colors font-body text-sm">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2 text-center">
            📦 Download Aplikasi
          </h2>
          <p className="text-center text-muted-foreground font-body mb-10">
            Pilih aplikasi yang ingin di-download
          </p>

          <div className="grid gap-6">
            {downloads.map((item) => (
              <div key={item.name} className="product-card p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-display font-bold text-card-foreground">{item.name}</h3>
                  <p className="text-sm text-muted-foreground font-body mt-1">{item.description}</p>
                </div>
                <a
                  href={item.link}
                  className="cta-button inline-flex items-center gap-2 shrink-0"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Downloads;
