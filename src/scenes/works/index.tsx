import React from "react";
import Image1 from "@/assets/Image(1).svg";
import Image2 from "@/assets/Image(2).svg";

import { motion } from "framer-motion";
import { ProjectType } from "@/types";
import HText from "@/shared/HText";
import Work from "@/scenes/works/Work";

type Props = {};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projects: Array<ProjectType> = [
  {
    title: "Linktree",
    description: "Inspired by famous people's social media",
    image: Image1,
  },
  {
    title: "Smokat - Food Delivery Project",
    description:
      "Inspired by Russian food delivery mobile app. Esentially samokat is a scooter translated from Russian language",
    image: Image2,
  },
];

const Works = (props: Props) => {
  return (
    <section
      className="mt-20 h-full w-full flex-col items-center justify-center "
      id="works"
    >
      <motion.div
        className="mx-auto flex h-full w-full items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="flex h-full w-full items-center justify-center">
          <HText>MY WORK</HText>
        </div>
      </motion.div>
      <div className="flex items-center justify-center">
        <p className="font-primary text-lg font-medium">
          Here some my projects!
        </p>
      </div>
      <div className="mt-10 h-full w-full overflow-x-auto overflow-y-hidden">
        <ul className="w-[2800px] whitespace-nowrap">
          {projects.map((item: ProjectType) => (
            <Work
              key={`${item.title}`}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Works;
