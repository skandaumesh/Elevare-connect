"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Gouthami Shivakumar",
      role: "Placement Officer, MLA Academy of Higher Learning",
      quote: "Elevare Connect transformed our students' approach to interviews and professional grooming. The personalized mentorship is unmatched.",
      img: "https://elevareacademy.in/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-12-at-15.18.21.jpeg",
    },
    {
      name: "Dhruv Roy",
      role: "Voyager Sales, Marriott International",
      quote: "The soft skills and confidence I gained from Wilma's coaching sessions were exactly what I needed to break into the hospitality industry.",
      img: "https://elevareacademy.in/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-14-at-11.08.46.jpeg",
    },
    {
      name: "Yashika Singh",
      role: "Financial Analyst, ABM Indore Pvt Ltd",
      quote: "Bridging the gap between academics and actual industry expectations was challenging until I joined Elevare. Highly recommended!",
      img: "https://elevareacademy.in/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-12-at-16.07.41.jpeg",
    },
    {
      name: "Saksham Mathur",
      role: "Sr. Executive – Talent Acquisition, Wipro",
      quote: "As a recruiter, I consistently see higher quality candidates coming out of Elevare's rigorous training methodology.",
      img: "https://elevareacademy.in/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-13-at-20.10.59.jpeg",
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[#7C3AED] text-sm font-bold tracking-widest uppercase mb-4">Testimonials</div>
          <h2 className="text-[#0D0D0D] text-4xl md:text-5xl font-bold tracking-tight">
            What People Are Saying
          </h2>
        </motion.div>
      </div>

      <div className="relative flex w-full pb-10 overflow-hidden hide-scrollbar">
        <motion.div
          className="flex gap-6 px-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35
          }}
        >
          {/* We duplicate the array to guarantee a seamless infinite scrolling loop without a visual breaking point */}
          {[...testimonials, ...testimonials].map((test, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex flex-col justify-between w-[290px] md:w-[380px] min-h-[300px] md:min-h-[320px] bg-white border border-slate-100 p-6 md:p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-300 whitespace-normal"
            >
              <div>
                <div className="flex gap-1 mb-6 text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-[#52525B] text-base md:text-lg italic mb-6 leading-relaxed">
                  &quot;{test.quote}&quot;
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border border-[rgba(0,0,0,0.07)]">
                  <img src={test.img} alt={test.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-[#0D0D0D] font-bold">{test.name}</h4>
                  <p className="text-[#7C3AED] text-sm font-medium line-clamp-1">{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}