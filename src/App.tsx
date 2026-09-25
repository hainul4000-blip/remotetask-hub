import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import WhatsInside from '@/components/WhatsInside';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import FloatingTelegram from '@/components/FloatingTelegram';
import FunnelModal from '@/components/FunnelModal';

function App() {
  const [funnelOpen, setFunnelOpen] = useState(false);

  const openFunnel = () => setFunnelOpen(true);
  const closeFunnel = () => setFunnelOpen(false);

  return (
    <div className="min-h-screen bg-ink-950 text-white overflow-x-hidden">
      <Header onGetKit={openFunnel} />
      <main>
        <Hero onGetKit={openFunnel} />
        <TrustBar />
        <WhatsInside onGetKit={openFunnel} />
        <Testimonials />
        <FAQ onGetKit={openFunnel} />
      </main>
      <Footer onGetKit={openFunnel} />
      <FloatingTelegram />
      <FunnelModal open={funnelOpen} onClose={closeFunnel} />
    </div>
  );
}

export default App;
