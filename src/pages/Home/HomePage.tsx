import { useEffect } from 'react';
import Hero from '../../components/Hero';
import Categories from '../../components/Categories';
import Solutions from '../../components/Solutions';
import Steps from '../../components/Steps';
import Industries from '../../components/Industries';
import WhyUs from '../../components/WhyUs';
import Portfolio from '../../components/Portfolio';
import Pricing from '../../components/Pricing';
import FAQ from '../../components/FAQ';
import Testimonials from '../../components/Testimonials';
import CTA from '../../components/CTA';

export default function HomePage() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      e.preventDefault();

      if (href.length > 1) {
        document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <main className="home-page">
      <Hero />
      <Categories />
      <Solutions />
      <Steps />
      <Industries />
      <WhyUs />
      <Portfolio />
      <Pricing />
      <FAQ />
      <Testimonials />
      <CTA />
    </main>
  );
}
