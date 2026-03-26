import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div
              className="absolute -bottom-4 -right-4 w-full h-full rounded-sm"
              style={{ backgroundColor: "#C8A24A", opacity: 0.2 }}
            />
            <img
              src="/assets/uploads/img-20260308-wa0095_1-019d27bf-9c27-71ca-ac44-3dfbb3621b9a-1.jpg"
              alt="CLAP members in front of law library"
              className="relative z-10 w-full rounded-sm object-cover shadow-xl"
              style={{ maxHeight: "420px" }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div
              className="h-1 w-12 mb-6"
              style={{ backgroundColor: "#C8A24A" }}
            />
            <h2
              className="font-serif text-3xl lg:text-4xl font-bold uppercase tracking-wide mb-6"
              style={{ color: "#0F2D44" }}
            >
              Who We Are
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              The{" "}
              <strong>Christian Lawyers Association of Pakistan (CLAP)</strong>{" "}
              is a professional body dedicated to uniting Christian legal
              professionals across the nation. Founded on the principles of
              faith, integrity, and justice, CLAP empowers lawyers, judges, and
              advocates to stand firm for the rule of law.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              We advocate tirelessly for <strong>religious freedom</strong> and
              the protection of minority rights in Pakistan, providing a
              platform for Christian legal voices to be heard in courtrooms,
              legislatures, and communities nationwide.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              Through fellowship, mentorship, and continuing legal education,
              our members grow professionally and spiritually — equipped to
              serve their clients and their country with excellence and
              compassion.
            </p>
            <div className="flex flex-wrap gap-6">
              {[
                { value: "500+", label: "Active Members" },
                { value: "25+", label: "Years of Service" },
                { value: "50+", label: "Cities Represented" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="font-serif text-3xl font-bold"
                    style={{ color: "#C8A24A" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    {stat.label}
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
