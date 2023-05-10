import Logo from "@/assets/Logo.svg";
import useMediaQuery from "@/hooks/useMediaQuery";

const NavBar = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 620px)");
  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between bg-stone py-5">
      <div className="flex w-full gap-20">
        {/*LEFT SIDE*/}
        <img
          alt="logo"
          src={Logo}
          className="flex items-start justify-start pl-6"
        />
        {/*RIGHT SIDE*/}
        {isAboveMediumScreens && (
          <div className="flex w-full items-center justify-center">
            <div className="flex items-center gap-16 text-lg">
              <a href="/" className="font-primary">
                HOME
              </a>
              <a href="/#about" className="font-primary">
                ABOUT
              </a>
              <a href="/#works" className="font-primary">
                WORKS
              </a>
              <a href="/#contact" className="font-primary">
                CONTACT
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
