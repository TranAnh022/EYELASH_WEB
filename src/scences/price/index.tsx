import { PriceType, SelectedPage } from "@/shared/type";
import React from "react";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/Circles.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Price from "./Price";
import IconTitle from "@/assets/IconTitle.jpg";

const priceEyeBrown: Array<PriceType> = [
  {
    name: "Lash ripsien kestotaivutus & värjäys/ Lash lift and tint (40 min) 55 €",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image1,
  },
  {
    name: "Kulmien laminointi/ Brow Lamination/ Brow Lift (60 min) 59€",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image3,
  },
];
const priceEyeLash: Array<PriceType> = [
  {
    name: "Uudet Ripsienpidennykset Volyymit (5–8D)/ New Volume Lash Extensions (5–8D)  (135 min) 115 €",
    description:
      "Pituudet: 6–16 mm | Kaaret: C,CC,D Lengths: 6–16 mm | Curls: C,CC,D",
    image: image1,
  },
  {
    name: "Uudet Volyymit luonnolliset/ Hybridi ripsienpidennykset (2–5D)/ New Natural Volumes/ Hybrid Lash Extensions (2–5D) (120 min) 95€",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image2,
  },
  {
    name: "Volume/Hybrid Maintenance",
    description:
      "-Huolto 60 min (n. 2 vk): 55€ -Huolto 75 min (n. 3 vk) 60€ -Pitkähuolto 75 min (n. 4 vk): 70€ Pituudet: 6–16 mm | Kaaret: C,CC,D",
    image: image3,
  },
  {
    name: "Volyymihuolto toisesta salongista max. 3 vk/ Volume Lash Maintenance from Another Salon max. 3 weeks (75 min) 75 €",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image4,
  },
  {
    name: "Megavolyymit (9–18D)/ Mega Volume Lashes (9–18D) (180 min) 150 €",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image5,
  },
  {
    name: "Mega Volume Maintenance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image6,
  },
  {
    name: "Classic Maintenance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: IconTitle,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const PriceLists = ({ setSelectedPage }: Props) => {
  return (
    <section id="pricelists" className="w-full bg-primary-100 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.PriceLists)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div>
            <HText>PRICE LISTS</HText>
            <p className="py-5">
              Discover our range of eyelash and brow services, tailored to
              enhance your natural beauty. Whether you're looking for classic
              extensions, volume lashes, or expert brow shaping, we offer
              premium services at competitive prices. Explore our pricing
              options and book your appointment today!
            </p>
          </div>
        </motion.div>
        <hr className="mx-auto mb-4 h-[2px] w-3/6 bg-black" />
        <div className="flex justify-center ">
          <p className=" font-montserrat text-2xl font-bold text-primary-500">
            EYE BROWN
          </p>
        </div>
        <div className="mt-10 mb-20 h-[353px] w-full overflow-x-hidden overflow-y-hidden">
          <ul className="flex w-auto justify-center">
            {priceEyeBrown.map((item: PriceType, index) => (
              <Price
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
        <div className="flex justify-center ">
          <p className=" font-montserrat text-2xl font-bold text-primary-500">
            EYE LASH
          </p>
        </div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[3500px] ">
            {priceEyeLash.map((item: PriceType, index) => (
              <Price
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default PriceLists;
