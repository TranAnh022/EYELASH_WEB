import React from "react";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { AboutUsType, SelectedPage } from "@/shared/type";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import AboutUs from "./AboutUs";
import ActionButton from "@/shared/ActionButton";
import { GiEyelashes } from "react-icons/gi";
import { RiBrushFill } from "react-icons/ri";
import BenefitPage1 from "@/assets/BenefitPage1.jpg";

const aboutUs: Array<AboutUsType> = [
  {
    icon: <GiEyelashes className="h-6 w-6" />,
    title: "✨ Luxury Lash & Brow Services",
    description:
      "Get perfectly styled lashes and brows by our trained beauty experts. From classic lash extensions to eyebrow shaping, we bring out your best look.",
  },
  {
    icon: <RiBrushFill className="h-6 w-6" />,
    title: "💖 High-Quality Beauty Products",
    description:
      "We use and offer only top-tier lash adhesives, brow styling products, and beauty essentials to maintain long-lasting results.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "🌟 Skilled & Certified Experts",
    description:
      "Our team of experienced beauty professionals is trained in the latest trends and techniques, ensuring you receive the best beauty treatments.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const About = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="aboutus"
      className="mx-auto min-h-full w-5/6 py-12 px-4 sm:px-8 lg:p-20"
    >
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}>
        {/* HEADER */}
        <motion.div
          className="text-center md:my-5 md:w-3/5 md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST BEAUTY</HText>
          <p className="my-4 text-sm sm:text-base">
            We provide expert lash and brow services, premium beauty products,
            and personalized care to enhance your natural beauty effortlessly.
          </p>
        </motion.div>

        {/* BENEFITS GRID */}
        <motion.div
          className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          variants={container}
        >
          {aboutUs.map((about: AboutUsType) => (
            <AboutUs
              key={about.title}
              aboutUs={about}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHIC AND DESCRIPTION */}
        <div className="mt-16 grid grid-cols-1 items-center gap-10 md:mt-24 md:grid-cols-2">
          {/* GRAPHIC */}
          <div className="flex justify-center">
            <img
              src={BenefitPage1}
              alt="benefits-page-graphic"
              className="w-full max-w-[400px] rounded-lg shadow-lg md:max-w-[500px]"
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <HText>
                MILLIONS OF HAPPY CLIENTS FEELING{" "}
                <span className="text-primary-500">BEAUTIFUL</span>.
              </HText>
            </motion.div>

            {/* DESCRIPTION TEXT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-4 text-sm sm:text-base ">
                At **EYELASH**, we believe beauty is an art. We specialize in
                enhancing your natural features with premium lash extensions,
                brow shaping, and beauty treatments tailored to perfection.
              </p>
              <p className="mb-5 text-sm sm:text-base">
                Our experts ensure you leave feeling confident and radiant. We
                use only high-quality products and cutting-edge techniques to
                deliver long-lasting results.
              </p>
              <div className="flex flex-wrap justify-center gap-2 font-medium text-primary-500 md:justify-start md:gap-4">
                <span>✨ Luxury Lash Extensions</span>
                <span className="hidden text-gray-400 md:inline">|</span>
                <span>🌿 Natural & Safe Products</span>
                <span className="hidden text-gray-400 md:inline">|</span>
                <span>💖 Expert Beauty Specialists</span>
              </div>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-10 flex justify-center md:justify-start">
              <ActionButton setSelectedPage={setSelectedPage}>
                Booking Now
              </ActionButton>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
