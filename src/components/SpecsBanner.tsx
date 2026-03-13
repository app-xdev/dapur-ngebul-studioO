import { Cpu, HardDrive, MemoryStick, Monitor } from 'lucide-react';

const specs = [
  { icon: Cpu, label: 'Dual-Core', desc: 'Processor Minimum' },
  { icon: MemoryStick, label: '1 GB RAM', desc: 'Memory Minimum' },
  { icon: HardDrive, label: '50 GB HDD', desc: 'Storage Minimum' },
  { icon: Monitor, label: 'GPU / VGA', desc: 'Hardware Acceleration' },
];

const SpecsBanner = () => {
  return (
    <section className="specs-banner py-12 px-4">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
          🖥️ Support PC Low-End
        </h2>
        <p className="text-primary-foreground/70 font-body">
          Render cepat dengan spesifikasi minimal. Percepatan hardware GPU/VGA didukung.
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {specs.map(({ icon: Icon, label, desc }) => (
          <div key={label} className="text-center">
            <Icon className="w-10 h-10 mx-auto mb-3 text-accent" />
            <div className="font-display font-bold text-lg">{label}</div>
            <div className="text-sm text-primary-foreground/60 font-body">{desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecsBanner;
