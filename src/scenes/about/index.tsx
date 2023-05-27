import WavesAboutPage from "@/assets/waves_aboutpage.svg";
import HText from "@/shared/HText";
import Waves from "@/assets/Waves2.svg";
import { motion } from "framer-motion";

type Props = {};

const Works = (props: Props) => {
  return (
    <section
      className="relative mt-16 flex h-full w-full flex-col justify-center px-6"
      id="about"
    >
      <img
        alt="background"
        src={Waves}
        className="z-60 absolute right-0 max-h-fit max-w-3xl object-cover mix-blend-multiply"
      />
      <motion.div
        className="mx-auto h-full max-w-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="flex flex-col items-center justify-center gap-8">
          <HText>WHO AM I?</HText>
          <p className="font-primary text-lg font-medium">
            As a Junior Front-End Developer, I bring a strong foundation in web
            development technologies such as HTML, CSS, JavaScript, React.js,
            TypeScript, and Git. With a strong drive to succeed, I am highly
            motivated to learn and expand my skill set, as well as contribute to
            team projects.
          </p>
          <p className="font-primary text-lg font-medium">
            As a detail-oriented individual, I place great emphasis on
            delivering high-quality work that is both functional and
            aesthetically pleasing. I am committed to staying up-to-date with
            the latest trends and best practices in the field of web
            development, and am eager to apply my knowledge and expertise to new
            challenges.
          </p>
        </div>

        <div className="mt-20 flex w-full flex-col items-center justify-center gap-4 text-gray">
          <HText>SKILLS</HText>
          <p className="mb-20 flex w-full flex-wrap justify-between text-center font-primary text-lg font-medium">
            <span>HTML/CSS</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>React.js</span>
            <span>Next.js</span>
            <span>Tailwind CSS</span>
            <span>Figma</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Works;
