import { Cross } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Membership", href: "#membership" },
  { label: "News & Events", href: "#news" },
  { label: "Leadership", href: "#leadership" },
];

const resources = [
  { label: "Legal Aid", href: "#contact" },
  { label: "Mentorship Program", href: "#membership" },
  { label: "CLE Programs", href: "#membership" },
  { label: "Publications", href: "#news" },
];

const socialLinks = [
  { icon: SiFacebook, label: "Facebook", href: "https://facebook.com" },
  { icon: SiX, label: "X (Twitter)", href: "https://x.com" },
  { icon: SiLinkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: SiInstagram, label: "Instagram", href: "https://instagram.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#0F2D44" }}>
      {/* Gold top border */}
      <div className="h-1" style={{ backgroundColor: "#C8A24A" }} />

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="flex items-center justify-center w-9 h-9 rounded-sm"
                style={{ backgroundColor: "#C8A24A" }}
              >
                <Cross className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-serif font-bold text-xl">
                CLAP
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Christian Lawyers Association of Pakistan — defending justice and
              upholding faith since 2010.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors"
                  style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#C8A24A" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    data-ocid="nav.link"
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#C8A24A" }}
            >
              Resources
            </h4>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#C8A24A" }}
            >
              Contact Info
            </h4>
            <address className="not-italic space-y-2 text-sm text-white/60">
              <p>13 Fane Road</p>
              <p>Lahore, Pakistan</p>
              <p className="pt-1">+923056923373</p>
              <p>info.clap.org@gmail.com</p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t py-5"
        style={{ borderColor: "rgba(255,255,255,0.1)" }}
      >
        <div className="container mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/50 text-xs">
            &copy; {year} Christian Lawyers Association of Pakistan. All rights
            reserved.
          </p>
          <p className="text-white/40 text-xs">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 underline transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
