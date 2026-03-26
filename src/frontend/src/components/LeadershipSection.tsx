import { motion } from "motion/react";
import type { LeadershipProfile } from "../backend.d.ts";
import { useGetLeadershipProfiles } from "../hooks/useQueries";

const SAMPLE_LEADERS: LeadershipProfile[] = [
  {
    name: "Advocate Sunny Bashir",
    title: "President, CLAP",
    bio: "Advocate Sunny Bashir is a distinguished legal professional specializing in human rights and constitutional law. He leads CLAP's advocacy initiatives and oversees the association's membership programs, mentorship efforts, and continuing legal education curriculum.",
    imageUrl:
      "/assets/uploads/img-20260326-wa0025-019d26e1-9efb-723c-9ba4-4b7bd0528ea0-1.jpg",
  },
  {
    name: "Advocate Sarfraz Masih",
    title: "Secretary General, CLAP",
    bio: "A dedicated legal professional committed to justice and the rights of minority communities in Pakistan. Advocate Sarfraz Masih brings deep expertise and unwavering commitment to CLAP's mission of upholding the rule of law.",
    imageUrl:
      "/assets/uploads/img-20260326-wa0023-019d26d4-8483-7787-afa8-96e1b5e56078-1.jpg",
  },
];

export default function LeadershipSection() {
  const { data: leaderData } = useGetLeadershipProfiles();

  const leaders =
    leaderData && leaderData.length > 0 ? leaderData : SAMPLE_LEADERS;

  return (
    <section id="leadership" className="py-20 lg:py-28 bg-white">
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
            Our Leadership Team
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Guided by experienced legal professionals committed to faith and
            justice.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8" data-ocid="leadership.list">
          {leaders.slice(0, 4).map((leader, idx) => (
            <motion.div
              key={leader.name}
              data-ocid={`leadership.item.${idx + 1}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex gap-6 p-6 rounded-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {leader.imageUrl && (
                <div className="flex-shrink-0">
                  <img
                    src={leader.imageUrl}
                    alt={leader.name}
                    className="w-24 h-24 rounded-full object-cover border-4"
                    style={{ borderColor: "#C8A24A" }}
                  />
                </div>
              )}
              <div>
                <h3
                  className="font-serif font-bold text-xl mb-1"
                  style={{ color: "#0F2D44" }}
                >
                  {leader.name}
                </h3>
                <div
                  className="text-sm font-semibold uppercase tracking-wider mb-3"
                  style={{ color: "#C8A24A" }}
                >
                  {leader.title}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
