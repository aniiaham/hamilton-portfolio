import React from "react";
import Photo from "@/assets/Photo.png";
import Waves from "@/assets/Waves2.svg";
import LinkedIn from "@/assets/Linkedin.svg";
import Instagram from "@/assets/instagram.svg";
import Telegram from "@/assets/telegram.svg";
import GitHub from "@/assets/github.svg";

type Props = {};

const Home = (props: Props) => {
  return (
    <section className="w-full gap-16 pt-20 md:h-full">
      <div className="mx-auto w-full items-center justify-center md:flex md:h-5/6">
        <img
          alt="background"
          src={Waves}
          className="pointer-events-none absolute right-0 -z-50 max-h-fit max-w-3xl object-cover"
        />
        <div className="mt-32">
          <div className="grid grid-flow-col grid-rows-2 gap-8">
            <img alt="logo" src={Photo} className="row-span-2" />
            <div className="col-span-2" />
            <div className="col-span-1 row-span-1 flex flex-col justify-center font-primary">
              <span className="text-2xl">Hey, I'm Aniia</span>
              <span className="text-3xl font-extrabold text-cyan">
                FRONT END DEVELOPER
              </span>
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
            <div className="mx-auto w-5/6">
              <div className="flex items-center justify-between">
                <a
                  href="https://www.instagram.com/aniiahamilton/"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <img alt="instagram" src={Instagram} />
                </a>
                <a
                  href="https://t.me/aniiahamilton"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <img alt="telegram" src={Telegram} />
                </a>
                <a
                  href="https://github.com/aniiaham"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <img alt="github" src={GitHub} />
                </a>
                <a
                  href="https://www.linkedin.com/in/aniia-hamilton/"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <img alt="linkedin" src={LinkedIn} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
