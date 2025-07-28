import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTree, FaLeaf, FaUsers, FaAward } from "react-icons/fa";

const CountSection = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    trees: 0,
    volunteers: 0,
    awards: 0,
  });

  const targetCounts = {
    projects: 150,
    trees: 2500,
    volunteers: 500,
    awards: 25,
  };

  useEffect(() => {
    const duration = 3000; // Animation duration in ms
    const interval = 50; // Update interval in ms
    const steps = duration / interval;

    const incrementCounts = () => {
      setCounts((prev) => ({
        projects: Math.min(
          prev.projects + Math.ceil(targetCounts.projects / steps),
          targetCounts.projects
        ),
        trees: Math.min(
          prev.trees + Math.ceil(targetCounts.trees / steps),
          targetCounts.trees
        ),
        volunteers: Math.min(
          prev.volunteers + Math.ceil(targetCounts.volunteers / steps),
          targetCounts.volunteers
        ),
        awards: Math.min(
          prev.awards + Math.ceil(targetCounts.awards / steps),
          targetCounts.awards
        ),
      }));
    };

    const timer = setInterval(() => {
      if (
        counts.projects < targetCounts.projects ||
        counts.trees < targetCounts.trees ||
        counts.volunteers < targetCounts.volunteers ||
        counts.awards < targetCounts.awards
      ) {
        incrementCounts();
      } else {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [counts]);

  const counterItems = [
    { icon: <FaTree />, count: counts.trees, label: "Trees Planted" },
    { icon: <FaLeaf />, count: counts.projects, label: "Projects" },
    { icon: <FaUsers />, count: counts.volunteers, label: "Volunteers" },
    { icon: <FaAward />, count: counts.awards, label: "Awards" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-teal-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          {counterItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="text-4xl text-teal-600 mb-4">{item.icon}</div>
              <h3 className="text-4xl font-bold text-green-800 mb-2">
                {item.count.toLocaleString()}+
              </h3>
              <p className="text-lg text-gray-600">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CountSection;
