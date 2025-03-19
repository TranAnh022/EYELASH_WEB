import { SelectedPage } from "@/shared/type";
import React from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import LondonLash from "@/assets/London-Lash-Logo.png";
import HomePageGraphic from "@/assets/eye.jpg";
import Cristel from "@/assets/CRISTEL.png";
import Hangstudio from "@/assets/Hangstudio.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Home({ setSelectedPage }: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* Image and Main Header */}
      <motion.div
        className="item-center mx-auto w-5/6 justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* Main Header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Heading */}
          <motion.div
            className="md:mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <p className="absolute -top-10 -left-6 z-[-1] text-7xl font-black opacity-10 md:-top-20 md:-left-20 md:text-9xl">
                Eyelashes
              </p>
              <div>
                <p className="font-montserra text-6xl font-black text-red-800 md:text-8xl">
                  Eyelashes
                </p>
                <p className="mt-3 text-red-700 md:text-2xl">
                  Where beauty meets elegance, one lash at a time
                </p>
              </div>
            </div>
            <p className="mt-8 text-sm">
              At{" "}
              <span className="relative inline-block before:absolute before:-inset-0 before:block before:-skew-y-3 before:bg-pink-500">
                <span className="dark:text-gray-950 relative text-white">
                  Eyelash
                </span>
              </span>{" "}
              , we create custom eyelash extensions that match your
              style—whether you prefer a natural, elegant look or bold,
              voluminous lashes. With expert craftsmanship and premium quality,
              we enhance your beauty, one lash at a time. ✨
            </p>
          </motion.div>
          {/* Action */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          ></motion.div>
        </div>
        {/* Image */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="Home-page-graphic" />
        </div>
      </motion.div>

      {/* Sponsors */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-4">
          <div className="mx-auto w-3/6 ">
            <div className=" grid grid-flow-col items-center ">
              <img src={LondonLash} alt="londonlash" className="w-[260px]" />
              <img src={Cristel} alt="Cristel" className="w-[120px] " />
              <img src={Hangstudio} alt="Hangstudio" className="w-[150px] ml-[40px] mb-1" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
