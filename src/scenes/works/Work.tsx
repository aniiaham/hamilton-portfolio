type Props = {
  title: string;
  description?: string;
  image: string;
};

const Works = ({ title, description, image }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex 
    h-[270px] w-[380px] rounded-3xl bg-opacity-90 text-white flex-col items-center justify-center
    whitespace-normal text-center
    opacity-0 transition duration-600 hover:opacity-100 bg-gray`;

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p className="font-primary text-2xl font-medium">{title}</p>
        <p className="font-primary font-medium">{description}</p>
      </div>
      <img alt={`${image}`} src={image} className="rounded-3xl" />
    </li>
  );
};

export default Works;
