import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitContactForm } from "../hooks/useQueries";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { mutate, isPending } = useSubmitContactForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    mutate(
      { name, email, message },
      {
        onSuccess: () => {
          toast.success("Your message has been sent! We'll be in touch soon.");
          setName("");
          setEmail("");
          setMessage("");
        },
        onError: () => {
          toast.error("Failed to send message. Please try again.");
        },
      },
    );
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#E6F3F5" }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div
            className="h-1 w-12 mx-auto mb-5"
            style={{ backgroundColor: "#C8A24A" }}
          />
          <h2
            className="font-serif text-3xl lg:text-4xl font-bold uppercase tracking-wide"
            style={{ color: "#0F2D44" }}
          >
            Get In Touch
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Have questions about membership or advocacy? Reach out — we'd love
            to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-sm shadow-md"
              data-ocid="contact.panel"
            >
              <div className="mb-5">
                <Label
                  htmlFor="contact-name"
                  className="text-sm font-semibold mb-1.5 block"
                  style={{ color: "#0F2D44" }}
                >
                  Full Name
                </Label>
                <Input
                  id="contact-name"
                  data-ocid="contact.input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="mb-5">
                <Label
                  htmlFor="contact-email"
                  className="text-sm font-semibold mb-1.5 block"
                  style={{ color: "#0F2D44" }}
                >
                  Email Address
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  data-ocid="contact.input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="mb-6">
                <Label
                  htmlFor="contact-message"
                  className="text-sm font-semibold mb-1.5 block"
                  style={{ color: "#0F2D44" }}
                >
                  Message
                </Label>
                <Textarea
                  id="contact-message"
                  data-ocid="contact.textarea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we help you?"
                  rows={5}
                  required
                />
              </div>
              <Button
                type="submit"
                data-ocid="contact.submit_button"
                disabled={isPending}
                className="w-full py-3 font-semibold uppercase tracking-wider rounded-sm hover:opacity-90 transition-all"
                style={{ backgroundColor: "#C8A24A", color: "#0F2D44" }}
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  "Contact Us"
                )}
              </Button>
            </form>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            {/* Styled Map Box */}
            <div
              className="flex-1 rounded-sm overflow-hidden shadow-md min-h-64"
              style={{ backgroundColor: "#0F2D44" }}
            >
              <div className="w-full h-full min-h-64 flex flex-col items-center justify-center gap-4 p-8 text-center relative">
                {/* Grid overlay */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(#C8A24A 1px, transparent 1px), linear-gradient(90deg, #C8A24A 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <MapPin
                  className="w-12 h-12 relative z-10"
                  style={{ color: "#C8A24A" }}
                />
                <div className="relative z-10">
                  <p className="text-white font-serif font-bold text-xl mb-1">
                    CLAP Office
                  </p>
                  <p className="text-white/70 text-sm">13 Fane Road</p>
                  <p className="text-white/70 text-sm">Lahore, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-sm shadow-md p-6 space-y-4">
              {[
                { icon: Phone, label: "Phone", value: "+923056923373" },
                {
                  icon: Mail,
                  label: "Email",
                  value: "info.clap.org@gmail.com",
                },
                {
                  icon: MapPin,
                  label: "Address",
                  value: "13 Fane Road, Lahore",
                },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(200,162,74,0.12)" }}
                  >
                    <Icon className="w-4 h-4" style={{ color: "#C8A24A" }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      {label}
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "#0F2D44" }}
                    >
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
