import React from "react";
import BurgerIcon from "../icons/burger.svg";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Icons } from "./icons";

const MobileNav = () => {
  return (
    <div className="fixed flex w-full items-center justify-end pr-8 pt-3">
      <Sheet>
        <SheetTrigger>
          <Icons.burger />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription>
              <div className="items-left flex flex-col gap-16 text-lg text-black">
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
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
