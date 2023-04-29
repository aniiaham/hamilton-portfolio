import HText from "@/shared/HText";
import { motion } from "framer-motion";
import React from "react";
type Props = {};

const Contact = (props: Props) => {
  return (
    <section id="contact">
      <motion.div
        className="ml-20 mt-16 h-full w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <HText>CONTACT ME</HText>
      </motion.div>
      <div className="mx-20 mt-10">
        <input
          className="mb-5 w-full rounded-lg bg-blue px-5 py-3 placeholder-gray"
          type="text"
          placeholder="NAME"
        />
        <input
          className="mb-5 w-full rounded-lg bg-blue px-5 py-3 placeholder-gray"
          type="email"
          placeholder="EMAIL"
        />
        <textarea
          className="mb-5 w-full rounded-lg bg-blue px-5 py-3 placeholder-gray"
          rows={4}
          cols={50}
          placeholder="MESSAGE"
        />
        <button
          type="submit"
          className="mt-5 rounded-lg bg-orange px-20 py-3 text-gray transition duration-500 hover:text-white"
        >
          SEND
        </button>
      </div>
    </section>
  );
};

export default Contact;
