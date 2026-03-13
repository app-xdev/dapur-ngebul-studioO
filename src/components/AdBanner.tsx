import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

const AdBanner = () => {
  const adRef = useRef<boolean>(false);

  useEffect(() => {
    if (!adRef.current) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {
        // adsbygoogle not loaded
      }
      adRef.current = true;
    }
  }, []);

  return (
    <div className="w-full flex justify-center py-4 px-4">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8033409291325553"
        data-ad-slot="7166650281"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdBanner;
