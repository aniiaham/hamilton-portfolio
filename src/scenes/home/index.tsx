import Photo from "@/assets/Photo.png";
import HText from "@/shared/HText";
import { motion } from "framer-motion";
import Socials from "@/shared/Socials";

type Props = {};

const Home = (props: Props) => {
  return (
    <section
      className="relative w-full gap-16 overflow-hidden bg-homepage-bg bg-cover bg-no-repeat pt-20 md:h-full"
      id="home"
    >
      <motion.div
        className="mx-auto w-full items-center justify-center md:flex"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="mt-32">
          <div className="grid grid-flow-col grid-rows-2 gap-8">
            <img alt="logo" src={Photo} className="row-span-2" />
            <div className="col-span-2" />
            <div className="col-span-1 row-span-1 flex flex-col justify-center font-primary">
              <span className="text-2xl">Hey, I'm Aniia</span>
              <HText>FRONT END DEVELOPER</HText>
            </div>
          </div>
          <div>
            <p className="md:text-startv mt-8 font-primary text-lg font-medium">
              I have a passion for creating dynamic and engaging UI <br /> and a
              drive to learn and improve my skills
            </p>
          </div>
          {/*LINKS*/}
          <div className="mx-h-fit bottom-0 w-full py-20">
            <Socials />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
