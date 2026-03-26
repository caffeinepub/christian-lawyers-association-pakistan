import { Button } from "@/components/ui/button";
import { Cross, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Membership", href: "#membership" },
  { label: "News & Events", href: "#news" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact Us", href: "#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{ backgroundColor: "#0F2D44" }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group"
            data-ocid="nav.link"
          >
            <div
              className="flex items-center justify-center w-10 h-10 rounded-sm"
              style={{ backgroundColor: "#C8A24A" }}
            >
              <Cross className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-white font-serif font-bold text-xl tracking-wide">
                CLAP
              </span>
              <span
                className="hidden sm:block text-xs tracking-wider"
                style={{ color: "#C8A24A" }}
              >
                Christian Lawyers Association Pakistan
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-6"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid="nav.link"
                className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
                style={{ textDecorationLine: "none" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Join Us + Mobile */}
          <div className="flex items-center gap-3">
            <a href="#membership">
              <Button
                data-ocid="nav.primary_button"
                className="hidden sm:flex text-sm font-semibold px-5 py-2 rounded-full border-2 transition-all duration-200 hover:opacity-90"
                style={{
                  backgroundColor: "#C8A24A",
                  borderColor: "#C8A24A",
                  color: "#0F2D44",
                }}
              >
                JOIN US
              </Button>
            </a>
            <button
              type="button"
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
              data-ocid="nav.toggle"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Gold divider */}
      <div className="h-px" style={{ backgroundColor: "#C8A24A" }} />

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden"
            style={{ backgroundColor: "#0F2D44" }}
          >
            <nav className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid="nav.link"
                  className="text-white/80 hover:text-white py-2 text-sm font-medium tracking-wide transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={() => {
                  setMobileOpen(false);
                  document
                    .getElementById("membership")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-2 w-full font-semibold rounded-full"
                style={{ backgroundColor: "#C8A24A", color: "#0F2D44" }}
              >
                JOIN US
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
