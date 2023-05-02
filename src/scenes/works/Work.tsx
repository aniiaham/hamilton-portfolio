import { useState } from "react";

type Props = {
  title: string;
  description?: string;
  image: string;
  website: string;
};

const Works = ({ title, description, image, website }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex 
    h-[270px] w-[380px] rounded-3xl bg-opacity-90 text-white flex-col items-center justify-center
    whitespace-normal text-center
    opacity-0 transition duration-600 hover:opacity-100 bg-gray`;

  return (
    <li className="relative mx-5 inline-block h-full">
      <div className={overlayStyles}>
        <p className="font-primary text-2xl font-medium">{title}</p>
        <p className="font-primary font-medium">{description}</p>
        <a href={website} target="_blank">
          <button className="rounded-md bg-white px-3 py-1.5 text-gray">
            Open
          </button>
        </a>
      </div>
      <img alt={`${image}`} src={image} className="rounded-3xl" />
    </li>
  );
};

export default Works;
