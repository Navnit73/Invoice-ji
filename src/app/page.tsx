// app/page.tsx
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      {/* <Products /> */}
      <Portfolio />
      <Testimonials />
      <Pricing />
      <Contact />
    </>
  );
}