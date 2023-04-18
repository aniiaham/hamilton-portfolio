import AboutPageBackgroud from "@/assets/aboutpage.png";
type Props = {};

const Works = (props: Props) => {
  return (
    <section className="h-full w-full pb-20 first-letter:gap-16" id="about">
      <div className="relavite">
        <img alt="background" src={AboutPageBackgroud} />
        <div className="m-10">
          <h1 className="text-3xl font-extrabold text-cyan">WHO AM I?</h1>
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
