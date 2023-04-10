import React from "react";
import Photo from "../../assets/Photo.png";
import Waves from "../../assets/Waves.svg";
import LinkedIn from "../../assets/Linkedin.svg";
import Instagram from "../../assets/instagram.svg";
import Telegram from "../../assets/telegram.svg";
import GitHub from "../../assets/github.svg";

type Props = {};

const Home = (props: Props) => {
  return (
    <section className="gap-16 pb-20 pt-20 md:h-full m-8">
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        <img
          alt="background"
          src={Waves}
          className="w-full max-h-fit object-cover absolute pointer-events-none -z-50"
        />
        <div className="mt-32 md:basis-3/5">
          <div>
            <div className="flex justify-between gap-10 items-center">
              <img alt="logo" src={Photo} />
              <div className="flex flex-col font-primary">
                <span className="text-xl">Hey, I'm Aniia</span>
                <br />
                <span className="text-2xl text-cyan font-bold">
                  FRONT END DEVELOPER
                </span>
              </div>
            </div>
            <div>
              <p className="md:text-startv mt-8 text-lg font-primary">
                I have a passion for creating dynamic and engaging UI <br /> and
                a drive to learn and improve my skills
              </p>
            </div>
            {/*SPONSORS*/}
            <div className="w-full py-10">
              <div className="mx-auto w-full">
                <div className="flex w-full items-center justify-between gap-8">
                  <img alt="inst" src={Instagram} />
                  <img alt="telegram" src={Telegram} />
                  <img alt="github" src={GitHub} />
                  <img alt="linkedin" src={LinkedIn} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
