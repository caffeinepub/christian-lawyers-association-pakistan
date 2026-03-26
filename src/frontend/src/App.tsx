import { Toaster } from "@/components/ui/sonner";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LeadershipSection from "./components/LeadershipSection";
import MembershipSection from "./components/MembershipSection";
import NewsSection from "./components/NewsSection";

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Toaster position="top-right" />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MembershipSection />
        <NewsSection />
        <LeadershipSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
