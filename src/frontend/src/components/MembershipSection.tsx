import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Scale, Users } from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  {
    icon: BookOpen,
    title: "Professional Development",
    description:
      "Access workshops, seminars, and resources to advance your legal career.",
  },
  {
    icon: Users,
    title: "Legal Network",
    description:
      "Connect with Christian lawyers, judges, and advocates across Pakistan.",
  },
  {
    icon: GraduationCap,
    title: "Mentorship",
    description:
      "Guided support from senior legal professionals who share your values.",
  },
  {
    icon: Scale,
    title: "Continuing Education",
    description:
      "Stay current with CLE sessions, legal updates, and faith-based ethics.",
  },
];

export default function MembershipSection() {
  return (
    <section id="membership" className="py-20 lg:py-28 bg-white">
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
            Membership &amp; Benefits
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Join a community of faith-driven legal professionals committed to
            justice and service.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(200,162,74,0.12)" }}
              >
                <benefit.icon
                  className="w-7 h-7"
                  style={{ color: "#C8A24A" }}
                  strokeWidth={1.5}
                />
              </div>
              <h3
                className="font-serif font-bold text-lg mb-2"
                style={{ color: "#0F2D44" }}
              >
                {benefit.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a href="#contact">
            <Button
              data-ocid="membership.primary_button"
              className="px-10 py-3 text-base font-semibold uppercase tracking-wider rounded-sm hover:opacity-90 transition-all hover:scale-105"
              style={{ backgroundColor: "#C8A24A", color: "#0F2D44" }}
            >
              Become a Member
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
