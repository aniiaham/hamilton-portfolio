import WavesAboutPage from "@/assets/waves_aboutpage.svg";
import HText from "@/shared/HText";
type Props = {};

const Works = (props: Props) => {
  return (
    <section
      className="relative h-full w-full bg-white bg-cover pb-20 first-letter:gap-16 md:h-full"
      id="about"
    >
      <div className=" mx-auto">
        {/* <img
          alt="background"
          src={WavesAboutPage}
          className="absolute max-h-fit object-cover mix-blend-multiply"
        /> */}
        <div className="m-10">
          <div className="flex items-center justify-center text-3xl text-gray">
            <HText>WHO AM I?</HText>
          </div>
          <p className="md:text-startv mt-8 font-primary text-lg font-medium">
            As a Junior Front-End Developer I am a highly motivated and
            detail-oriented individual with a strong foundation in HTML, CSS,
            JavaScript, React.js, TypeScript and Git.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Works;
