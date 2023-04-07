import React from "react";
import Logo from "../../assets/Logo.png";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav>
      <div className="bg-stone flex items-center justify-between fixed top-0 z-30 w-full py-5">
        <div className="flex items-center justify-between mx-auto w-5/6">
          <div className="flex items-center justify-between w-full gap-20">
            {/*LEFT SIDE*/}
            <img alt="logo" src={Logo} />
            {/*RIGHT SIDE*/}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-between gap-8 text-lg">
                <a href="About" className="font-primary">
                  About
                </a>
                <a href="Portfolio" className="font-primary">
                  Portfolio
                </a>
                <a href="Contact" className="font-primary">
                  Contact
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
