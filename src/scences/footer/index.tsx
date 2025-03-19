import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import { ImWhatsapp } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex ">
        <div className="mt-16 basis-1/2 md:mt-0">
          <div className="flex flex-row items-center gap-1">
            <div className="font-montserrat text-2xl font-bold text-pink-500 ">
              EYELASHES
            </div>
          </div>
          <p className="my-5">
            Confidence starts with the perfect lashes. Our expertly crafted
            designs bring out the best in your eyes, making every blink a
            statement. Whether for a special occasion or daily wear, our lashes
            offer comfort, durability, and effortless beauty.
          </p>
          <p className="font-semibold">© EYELASHES All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>

          <div className="my-5 flex items-center gap-3">
            <AiOutlineInstagram className="text-3xl" />
            <a
              href="https://www.instagram.com/eyelashes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-md transition duration-500 hover:text-primary-300"
            >
              Instagram
            </a>
          </div>

          <div className="my-5 flex items-center gap-3">
            <AiOutlineFacebook className="text-3xl" />
            <a
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-md transition duration-500 hover:text-primary-300"
            >
              Facebook
            </a>
          </div>

          <div className="my-5 flex items-center gap-3">
            <ImWhatsapp className="text-3xl" />
            <a
              href="https://wa.me/yourphonenumber"
              target="_blank"
              rel="noopener noreferrer"
              className="text-md transition duration-500 hover:text-primary-300"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Seinajoki ,Finland.</p>
          <p>(358)425-6825</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Opening time</h4>
          <p className="my-5">Mon-Fri : 10:00 - 17:00</p>
          <p className="my-5">Sat: 12:00 - 17:00</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
