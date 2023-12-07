import styled from "styled-components";
import logo from "/public/logo.svg";
import Link from "next/link";
import Image from "next/image";

const Logo = styled.div`
  width: 80px; /* Adjust the size as needed */
`;

function Navbar() {
  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-black to-gray-800 p-4 ">
      <Logo>
        <Image src={logo} alt="Logo" />
      </Logo>
      <div className="flex items-center">
        <div className="text-white text-base mr-4">
          <Link href={"/"} alt="logo">
            Home
          </Link>
        </div>
        <div className="text-white text-base mr-4">
          <Link href={"/get-started"} alt="logo">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
