import React from "react";
import robot from "/public/robot.png"; // Replace with the actual path to your robot image
import Link from "next/link";
import Image from "next/image";
import styles from "../style";
import arrowUp from "/public/arrow-up.svg"; //

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Crafting The <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Future</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <div
              className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
            >
              <div
                className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full `}
              >
                <Link href={"/get-started"} alt="logo">
                  <div className={`${styles.flexStart} flex-row`}>
                    <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                      <span className="text-dimWhite ">Get</span>
                    </p>

                    <Image
                      src={arrowUp}
                      alt="arrow-up"
                      className="w-[23px] h-[23px] object-contain"
                    />
                  </div>
                  <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                    <span className="text-dimWhite">Started</span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Of Assessments.
        </h1>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
          Discover the power of AI-driven assessment customization with XamQgen.
          Our AI-based approach employs a meticulous methodology to create
          question papers that perfectly align with your specific requirements.
          We carefully evaluate content, format, and difficulty levels, ensuring
          your assessments are tailored to your unique needs.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <Image src={robot} alt="Logo" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>Get Started</div>
    </section>
  );
};

export default Hero;
