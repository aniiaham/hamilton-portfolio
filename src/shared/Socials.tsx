import LinkedIn from "@/assets/Linkedin.svg";
import Instagram from "@/assets/instagram.svg";
import Telegram from "@/assets/telegram.svg";
import GitHub from "@/assets/github.svg";

type Props = {};

const Socials = (props: Props) => {
  return (
    <div>
      <div className="mx-auto w-5/6">
        <div className="flex items-center justify-evenly">
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
  );
};

export default Socials;
