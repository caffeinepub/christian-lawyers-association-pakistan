import { Calendar } from "lucide-react";
import { motion } from "motion/react";
import type { NewsEvent } from "../backend.d.ts";
import { useGetNewsEvents } from "../hooks/useQueries";

const SAMPLE_NEWS: (NewsEvent & { image: string })[] = [
  {
    title: "Annual Legal Aid Conference 2026",
    date: BigInt(new Date("2026-02-10").getTime()) * BigInt(1_000_000),
    excerpt:
      "CLAP hosted its annual conference bringing together over 200 Christian legal professionals to discuss religious freedom and legal aid strategies for marginalized communities.",
    image: "/assets/generated/news-conference.dim_400x250.jpg",
  },
  {
    title: "Advocacy for Blasphemy Law Reform",
    date: BigInt(new Date("2026-01-22").getTime()) * BigInt(1_000_000),
    excerpt:
      "Our advocacy team presented recommendations to parliamentary committees, calling for amendments to ensure fair trials and protection for accused individuals.",
    image: "/assets/generated/news-advocacy.dim_400x250.jpg",
  },
  {
    title: "New Member Induction Ceremony",
    date: BigInt(new Date("2025-12-15").getTime()) * BigInt(1_000_000),
    excerpt:
      "Forty new members were inducted into CLAP at a ceremony in Lahore, pledging to uphold the values of justice, integrity, and faith in their legal practice.",
    image:
      "/assets/uploads/img-20251219-wa0130_1-019d27b9-ff72-7784-9abb-0f76951985c5-1.jpg",
  },
];

function formatDate(nanos: bigint): string {
  const ms = Number(nanos / BigInt(1_000_000));
  return new Date(ms).toLocaleDateString("en-PK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const FALLBACK_IMAGES = [
  "/assets/generated/news-conference.dim_400x250.jpg",
  "/assets/generated/news-advocacy.dim_400x250.jpg",
  "/assets/uploads/img-20251219-wa0130_1-019d27b9-ff72-7784-9abb-0f76951985c5-1.jpg",
];

export default function NewsSection() {
  const { data: newsData } = useGetNewsEvents();

  const newsItems =
    newsData && newsData.length > 0
      ? newsData.slice(0, 3).map((item, i) => ({
          ...item,
          image: item.imageUrl || FALLBACK_IMAGES[i % 3],
        }))
      : SAMPLE_NEWS;

  return (
    <section
      id="news"
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
            News &amp; Recent Events
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Stay up to date with CLAP's latest activities, advocacy efforts, and
            community events.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8" data-ocid="news.list">
          {newsItems.map((item, idx) => (
            <motion.div
              key={item.title}
              data-ocid={`news.item.${idx + 1}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div
                  className="flex items-center gap-2 text-xs font-medium mb-3"
                  style={{ color: "#C8A24A" }}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  {formatDate(item.date)}
                </div>
                <h3
                  className="font-serif font-bold text-lg mb-3 leading-snug"
                  style={{ color: "#0F2D44" }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
