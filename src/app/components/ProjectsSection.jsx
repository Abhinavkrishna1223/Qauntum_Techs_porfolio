"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Collegedisha",
    description: "An Edtech website deals with college admissions, courses and counselling.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    // gitUrl: "/",
    previewUrl: "https://collegedisha.com",
  },
  {
    id: 2,
    title: "Schools18",
    description: "An edtech website deals with school admissions and counselling.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    // gitUrl: "/",
    previewUrl: "https://schools18.com/",
  },
  {
    id: 3,
    title: "Colleges18",
    description: "An Edtech website deals with college admissions, courses and counselling.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    // gitUrl: "/",
    previewUrl: "https://www.colleges18.com/",
  },
  {
    id: 4,
    title: "Rathi Farms",
    description: "Enjoy hassle-free online vegetable, grocery shopping, and contactless home delivery at just a click of a button.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    // gitUrl: "/",
    previewUrl: "https://play.google.com/store/apps/details?id=com.rathifarms&hl=en_US",
  },
  {
    id: 5,
    title: "Apna Kisan",
    description: "manufacturer of a wide range of agri products and parts.",
    image: "/images/projects/5.png",
    tag: ["All", "Mobile"],
    // gitUrl: "/",
    previewUrl: "https://play.google.com/store/apps/details?id=com.blackhatcode.in.ssa_app.new&hl=en_US",
  },
  {
    id: 6,
    title: "My Jobee",
    description: "It is a job searching platform. ",
    image: "/images/projects/6.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://play.google.com/store/search?q=my%20jobee&c=apps&hl=en_US",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-evenly items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
