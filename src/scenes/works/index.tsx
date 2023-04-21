import React from "react";
import Image1 from "@/assets/image1.svg";
import Image2 from "@/assets/image2.svg";

import { motion } from "framer-motion";
import { ProjectType } from "@/types";
import HText from "@/shared/HText";

type Props = {};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projects: Array<ProjectType> = [
  {
    title: "Smokat - Food Delivery Project",
    description:
      "Inspired by Russian food delivery mobile app. Esentially samokat is a scooter translated from Russian language",
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
    <section className="bg-primary-100 mt-8 w-full py-40" id="works">
      <motion.div
        className="mx-auto w-5/6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="md:w-3/5">
          <HText>MY WORK</HText>
          <p className="py-5 "></p>
        </div>
      </motion.div>
    </section>
  );
};

export default Works;
