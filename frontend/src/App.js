import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import StatsBar from "@/components/landing/StatsBar";
import Services from "@/components/landing/Services";
import Industries from "@/components/landing/Industries";
import Process from "@/components/landing/Process";
import AboutSection from "@/components/landing/About";
import Testimonials from "@/components/landing/Testimonials";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";
import CategoryPage from "@/pages/CategoryPage";
import Clientele from "@/pages/Clientele";
import AboutPage from "@/pages/About";

function Landing() {
  return (
    <div className="App bg-white text-brand-navy min-h-screen" data-testid="landing-page">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <Industries />
        <Process />
        <AboutSection />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/clientele" element={<Clientele />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Toaster position="top-center" richColors />
    </BrowserRouter>
  );
}

export default App;
