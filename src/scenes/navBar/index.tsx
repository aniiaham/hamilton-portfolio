import Logo from "@/assets/Logo.svg";
import { SelectedPage } from "@/types";

const NavBar = () => {
  return (
    <nav>
      <div className="fixed top-0 z-30 flex w-full items-center justify-between bg-stone py-5">
        <div className="mx-auto flex items-center justify-between">
          <div className="flex w-full items-center gap-20">
            {/*LEFT SIDE*/}
            <img alt="logo" src={Logo} />
            {/*RIGHT SIDE*/}
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center justify-between gap-16 text-lg">
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
