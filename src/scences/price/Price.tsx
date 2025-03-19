type Props = {
  name: string;
  description: string;
  image: string;
};

const Price = ({ name, description, image }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex md:h-[380px] md:w-[450px] w-[280px] h-[180px]
  flex-col items-center justify-center bg-primary-500
  text-center text-white opacity-0 transition duration-500 hover:opacity-90`;
  return (
    <li className="relative mx-2 inline-block  h-[180px] w-[280px]   md:mx-5 md:h-[380px] md:w-[450px]">
      <div className={overlayStyles}>
        <p className="text-sm md:text-2xl">{name}</p>
        <p className="mt-1 whitespace-pre-line text-[10px] md:mt-5 md:text-xl">
          {description}
        </p>
      </div>
      <img
        src={image}
        alt={`${image}`}
        className="h-[180px] w-[280px] object-cover md:h-[330px] md:w-[430px] "
      />
    </li>
  );
};

export default Price;
