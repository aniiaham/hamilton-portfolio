import React from "react";

type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    <h1 className="font-primary text-3xl font-bold text-gray">{children}</h1>
  );
};

export default HText;
