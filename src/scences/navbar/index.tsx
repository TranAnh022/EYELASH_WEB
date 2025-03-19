import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import { SelectedPage } from "@/shared/type";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";
type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-end";
  const [isMenuToggle, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const navbarBackGround = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav className="">
      <div
        className={`${navbarBackGround} ${flexBetween} justi fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full  gap-16`}>
            {/* LeftSide */}
            <div className="flex flex-row items-center gap-1">
              <div className="font-montserrat text-2xl font-bold text-pink-500 ">
                EYELASHES
              </div>
              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [1, 0.8, 1],
                }}
                transition={{
                  duration: 3, // Speed of the effect
                  repeat: Infinity, // Loop forever
                  ease: "easeInOut", // Smooth effect
                }}
              >
                <GoDotFill className="text-red-500" size={20} />
              </motion.div>
            </div>

            {/* RightSide */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="About Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Price Lists"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Booking an Appointment
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggle)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Mobile Menu Modal */}
      {!isAboveMediumScreens && isMenuToggle && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl ">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggle)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Price List"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Booking"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
