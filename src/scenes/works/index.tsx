import React from "react";
import Linktree from "@/assets/Linktree-img.svg";
import FoodDelivery from "@/assets/FoodDelivery-img.svg";

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
    description:
      "Inspired by Selena Gomez's social media reference landing page.",
    image: Linktree,
    website: "https://github.com/aniiaham/linktree",
  },
  {
    title: "Smokat - Food Delivery Project",
    description:
      "Inspired by Food delivery mobile app. Esentially samokat is a scooter translated from Russian.",
    image: FoodDelivery,
    website: "https://github.com/aniiaham/samokat_delivery",
  },
  {
    title: "Linktree1",
    description: "Inspired by famous people's social media",
    image: Linktree,
    website: "https://github.com/aniiaham/linktree",
  },
];

const Works = (props: Props) => {
  return (
    <section
      className="justify-left flex h-full w-full flex-col bg-blue"
      id="works"
    >
      <div className="ml-20 flex h-full flex-col gap-6">
        <motion.div
          className="mx-auto mt-20 flex h-full w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="items-left justify-left ml-30 flex h-full w-full ">
            <HText>MY WORK</HText>
          </div>
        </motion.div>
        <motion.div
          className="items-left justify-left ml-30 flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-primary text-lg font-medium">
            Here some my projects!
          </p>
        </motion.div>
        <div className="mt-10 h-full w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {projects.map((item: ProjectType) => (
              <Work
                key={`${item.title}`}
                title={item.title}
                description={item.description}
                image={item.image}
                website={item.website}
              />
            ))}
          </ul>
        </div>
        <p className="mx-20 mb-4 flex justify-end font-primary text-lg font-medium">
          More comig soon...
        </p>
      </div>
    </section>
  );
};

export default Works;
