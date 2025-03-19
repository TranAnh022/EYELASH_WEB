import { SelectedPage } from "@/shared/type";
import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";
import { triggerAsyncId } from "async_hooks";
import ContactPage from "@/assets/ContactPage.jpg";
import BeneFitPage from "@/assets/BenefitPage.jpg";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mb-5`;

  const {
    trigger,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Contactus)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">CONTACT US</span> TO ENHANCE YOUR
            BEAUTY
          </HText>
          <p className="mt-4 text-gray-600">
            Have questions or want to book an appointment? Reach out to us!
            We’re here to help you achieve the perfect lash look.
          </p>
        </motion.div>
        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/f416696a3b9f4cc6268c0b6ac484f667"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1" text-primary-500>
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" && "Max Length is 100"}
                </p>
              )}
              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}
              <textarea
                className={inputStyles}
                cols={50}
                rows={4}
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 200,
                })}
              />
              {errors.name && (
                <p className="mt-1" text-primary-500>
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" &&
                    "Max Length is 200 characters"}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 ease-in-out hover:text-white"
              >
                Submit
              </button>
            </form>
          </motion.div>
          <motion.div
            className="basis 2/5 relative mt-16 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {" "}
            <p className="absolute z-[-1] font-black opacity-10 md:-bottom-[100px] md:-right-10 md:text-[160px]">
              Eyelashes
            </p>
            <img
              src={ContactPage}
              alt="contactus-page-graphic"
              className="h-[448px] w-[412px]"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
