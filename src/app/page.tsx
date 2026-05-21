import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Machines from '@/components/Machines';
import Services from '@/components/Services';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Machines />
      <Services />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
