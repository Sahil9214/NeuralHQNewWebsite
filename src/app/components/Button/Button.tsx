import React from "react";
import Link from "next/link";

interface ButtonProps {
  link: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ link, text }) => {
  return (
    <Link href={link}>
      <button className="px-4 py-2 text-[2.5vw] md:text-[1.3vw] lg:text-[1.1vw] md:w-[12.98vw] md:h-[7vh] border-2 border-[#6366F1] text-[#6366F1] rounded-[16px] hover:bg-[#6366F1] hover:text-white transition-colors duration-300">
        {text}
      </button>
    </Link>
  );
};

export default Button;
