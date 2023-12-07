import React from "react";
import Link from "next/link";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    <Link href={"/get-started"} alt="logo">
      Get Started
    </Link>
  </button>
);

export default Button;
