import { motion } from "framer-motion";
import { Banner1, Banner2, Banner3 } from "../../assets";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Valley Restoration",
      description: "Rehabilitation of degraded areas in Kokan valley",
      image: Banner1,
      tags: ["Conservation", "Restoration"],
    },
    {
      id: 2,
      title: "Community Gardens",
      description: "Establishing sustainable community gardens",
      image: Banner2,
      tags: ["Agriculture", "Community"],
    },
    {
      id: 3,
      title: "Eco Education",
      description: "Environmental education for local schools",
      image: Banner3,
      tags: ["Education", "Awareness"],
    },
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Our <span className="text-teal-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our initiatives to protect and enhance the Kokan valley
            ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-teal-600 text-white text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="text-teal-600 font-medium hover:text-teal-800 transition-colors">
                  View Project →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
