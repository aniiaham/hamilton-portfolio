import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Icons } from "./icons";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isOpenHandler = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed flex w-full items-center justify-end pr-8 pt-3 sm:hidden">
      <Sheet
        open={isOpen}
        onOpenChange={(open) => {
          if (open) {
            setIsOpen(true);
          } else {
            setIsOpen(false);
          }
        }}
      >
        <SheetTrigger>
          <Icons.burger />
        </SheetTrigger>
        <SheetContent>
          <div className="items-left flex flex-col gap-16 text-lg text-black">
            <a href="/" className="font-primary">
              HOME
            </a>
            <a href="/#about" className="font-primary" onClick={isOpenHandler}>
              ABOUT
            </a>
            <a href="/#works" className="font-primary" onClick={isOpenHandler}>
              WORKS
            </a>
            <a
              href="/#contact"
              className="font-primary"
              onClick={isOpenHandler}
            >
              CONTACT
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
