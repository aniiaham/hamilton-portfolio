import LinkedIn from "@/assets/Linkedin.svg";
import Instagram from "@/assets/instagram.svg";
import Telegram from "@/assets/telegram.svg";
import GitHub from "@/assets/github.svg";
import { motion } from "framer-motion";

type Props = {};

const Socials = (props: Props) => {
  return (
    <div>
      <div className="mx-auto w-5/6">
        <div className="flex items-center justify-evenly">
          <motion.a
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            href="https://www.instagram.com/aniiahamilton/"
            target="_blank"
            className="cursor-pointer"
          >
            <img alt="instagram" src={Instagram} />
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            href="https://t.me/aniiahamilton"
            target="_blank"
            className="cursor-pointer"
          >
            <img alt="telegram" src={Telegram} />
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            href="https://github.com/aniiaham"
            target="_blank"
            className="cursor-pointer"
          >
            <img alt="github" src={GitHub} />
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            href="https://www.linkedin.com/in/aniia-hamilton/"
            target="_blank"
            className="cursor-pointer"
          >
            <img alt="linkedin" src={LinkedIn} />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Socials;
