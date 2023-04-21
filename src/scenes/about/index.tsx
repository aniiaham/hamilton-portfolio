import WavesAboutPage from "@/assets/waves_aboutpage.svg";
import HText from "@/shared/HText";
import Waves from "@/assets/Waves.svg";
import { motion } from "framer-motion";

type Props = {};

const Works = (props: Props) => {
  return (
    <section
      className="relative mx-auto mt-4 h-full w-full max-w-xl bg-cover md:h-full"
      id="about"
    >
      <img
        alt="background"
        src={Waves}
        className="absolute -z-30 max-h-fit max-w-fit object-cover"
      />
      <motion.div
        className="mx-auto w-full py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="flex items-center justify-center text-3xl text-gray">
          <HText>WHO AM I?</HText>
        </div>
        <p className="md:text-startv mt-8 font-primary text-lg font-medium">
          As a Junior Front-End Developer I am a highly motivated and
          detail-oriented individual with a strong foundation in HTML, CSS,
          JavaScript, React.js, TypeScript and Git.
        </p>
        <div className="mt-20 flex items-center justify-center text-gray">
          <HText>SKILLS</HText>
        </div>
        <p className="md:text-startv mt-8 font-primary text-lg font-medium">
          HTML/CSS JavaScript TypeScript React.js Tailwind CSS Figma
        </p>
      </motion.div>
    </section>
  );
};

export default Works;
