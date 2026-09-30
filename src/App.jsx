import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Hero from './components/sections/Hero';
import AboutSection from './components/sections/AboutSection';
import ServiceGrid from './components/sections/ServiceGrid';
import WindowsSection from './components/sections/WindowsSection';
import SlidingSection from './components/sections/SlidingSection';
import DoorsSection from './components/sections/DoorsSection';
import OfficePartitions from './components/sections/OfficePartitions';
import GlassPartitions from './components/sections/GlassPartitions';
import FactoryPartitions from './components/sections/FactoryPartitions';
import FacadesSection from './components/sections/FacadesSection';
import ResidentialSection from './components/sections/ResidentialSection';
import CommercialSection from './components/sections/CommercialSection';
import WhyChooseUs from './components/sections/WhyChooseUs';
import ProjectGallery from './components/gallery/ProjectGallery';
import ProcessTimeline from './components/sections/ProcessTimeline';
import TrustHighlights from './components/sections/TrustHighlights';
import CTASection from './components/sections/CTASection';
import ContactSection from './components/contact/ContactSection';

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <AboutSection />
        <ServiceGrid />
        <WindowsSection />
        <SlidingSection />
        <DoorsSection />
        <OfficePartitions />
        <GlassPartitions />
        <FactoryPartitions />
        <FacadesSection />
        <ResidentialSection />
        <CommercialSection />
        <WhyChooseUs />
        <ProjectGallery />
        <ProcessTimeline />
        <TrustHighlights />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
