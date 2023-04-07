import React from "react";
import Photo from "../../assets/Photo.png";

type Props = {};

const Home = (props: Props) => {
  return (
    <section id="home" className="gap-16 bg-white pb-10 pt-10 md:h-full">
      <div className="z-10 mt-32 md:basis-3/5">
        <div></div>
        <div>
          <div
            className="flex justify-left md:z-15 
            md:ml-40 md:mt-16 md:justify-items-end"
          >
            <img alt="photo" src={Photo} />
            <div className="font-primary">
              <span className="text-lg">Hey, I'm Aniia</span><br />
              <span className="text-2xl text-cyan decoration-none">FRONT END DEVELOPER</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
