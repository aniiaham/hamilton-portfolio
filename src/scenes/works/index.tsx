import React from "react";

import { motion } from "framer-motion";
type Props = {};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Works = (props: Props) => {
  return (
    <section className="mx-auto min-h-full w-5/6 py-20">
      <motion.div>
        {/*HEADER*/}
        <motion.div className="md:my-5 md:w-3/5">
          <h1 className="text-3xl font-extrabold text-cyan">MY WORK</h1>
          <p className="text-m my-5">Text coming soon...</p>
        </motion.div>
        {/*PROJECTS*/}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default Works;
