import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: "url('/assets/generated/hero-clap.dim_1920x1080.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(15,45,68,0.92) 0%, rgba(15,45,68,0.75) 50%, rgba(15,45,68,0.55) 100%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{
                backgroundColor: "rgba(200,162,74,0.2)",
                color: "#C8A24A",
                border: "1px solid #C8A24A",
              }}
            >
              <span>★</span> Christian Lawyers Association of Pakistan
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight uppercase tracking-wide mb-6">
              Defending Justice,
              <br />
              <span style={{ color: "#C8A24A" }}>Upholding Faith.</span>
            </h1>
            <p className="text-white/80 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl">
              Uniting Christian legal professionals across Pakistan to champion
              justice, safeguard religious freedom, and serve communities
              through the rule of law.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#membership">
                <Button
                  data-ocid="hero.primary_button"
                  className="px-8 py-3 text-base font-semibold rounded-sm uppercase tracking-wider transition-all hover:opacity-90 hover:scale-105"
                  style={{ backgroundColor: "#C8A24A", color: "#0F2D44" }}
                >
                  Join Our Mission
                </Button>
              </a>
              <a href="#about">
                <Button
                  data-ocid="hero.secondary_button"
                  variant="outline"
                  className="px-8 py-3 text-base font-semibold rounded-sm uppercase tracking-wider border-2 text-white hover:text-navy transition-all"
                  style={{
                    borderColor: "white",
                    backgroundColor: "transparent",
                  }}
                >
                  Learn More
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
