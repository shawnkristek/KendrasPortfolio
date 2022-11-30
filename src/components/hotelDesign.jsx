import { useState } from "react";
import Image from "next/image";

import {
  HotelCalendar,
  HotelCheckout,
  HotelColorPalette,
  HotelDesktopNavBar,
  HotelFonts,
  HotelMobileStatusStepper,
  HotelMobileHeader,
  HotelRoomOptionsBar,
  HotelSummaryWidget,
  HotelDesktop,
  HotelMobile,
} from "lib/designImages";

import styles from "styles/designs.module.css";

const HotelDesign = () => {
  const [pressed, setPressed] = useState(false);

  const handlePressed = () => {
    setPressed(!pressed);
  };

  return (
    <section className={`${styles.section} ${styles.firstsection} `}>
      <div className="h-full">
        <div className={styles.container}>
          <div className="">
            {/* <div className={`${!pressed ? "hidden" : ""} flex justify-center`}>
            <HotelDesignComponents />
          </div> */}
            <div className={`${pressed ? "hidden" : ""}`}>
              <div className={`${styles.container}`}>
                <div>
                  <h2 className="raleway kwhite text-[1rem] lg:text-[1.2rem] text-center">
                    l'Hotel Paris - UI/Visual design and branding for a Parisian hotel's desktop and mobile booking flow
                  </h2>
                </div>
                <div className={styles.split}>
                  <div>
                    <Image src={HotelDesktop} alt="mockup of a design for a Parisian hotel's desktop booking flow" />
                  </div>
                  <div>
                    <Image src={HotelMobile} alt="mockup of a design for a Parisian hotel's mobile booking flow" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="underline text-[1rem] text-center">
            <a target="_blank" rel="noopener noreferrer"
              href="https://www.figma.com/proto/gkdkNmPxaW2Q4D3DlFcFT5/%E2%9C%85-Kendra-Wright---L5?page-id=1172%3A1368&node-id=1158%3A1203&viewport=340%2C261%2C0.03&scaling=scale-down&starting-point-node-id=1158%3A1203&show-proto-sidebar=1"
            >
              <button className={`bg-[#835f02] focus:ring-1 focus-outline-none ring-[white] shadow-sm shadow-[#835f02]/50 rounded-lg text-sm px-5 py-2.5 text-center hover:scale-105 hover:ring-2 transistion duration-200 font-semibold ${pressed ? "bg-[white] text-[#835f02]" : ""}`}>
                Figma Prototype
              </button>
            </a>
          </div>
          <div className="flex justify-center">
            {/* <button onClick={handlePressed} className={`bg-[#835f02] focus:ring-1 focus-outline-none ring-[#c5cdcd] shadow-sm shadow-[#835f02]/50 rounded-lg text-sm px-5 py-2.5 text-center hover:scale-105 hover:ring-2 transistion duration-200 font-semibold ${pressed ? "bg-[#c5cdcd] text-[#835f02]" : ""}`}>
            <span className={`${!pressed ? "hidden" : ""}`} >Mockups</span>
            <span className={`${pressed ? "hidden" : ""}`}>Components</span>
          </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

const HotelDesignComponents = ({ className, ...props }) => {
  return (
    <div className={`${className} h-full max-w-max flex flex-col justify-center align-middle`}>
      <div className="flex flex-row justify-between">
        <div>
          <Image className="" src={HotelColorPalette} alt="color palette" />
        </div>
        <div>
          <Image className="" src={HotelFonts} alt="fonts" />
        </div>
        <div>
          <Image className="" src={HotelMobileStatusStepper} alt="mobile status stepper" />
        </div>
      </div>

      <div className="flex flex-row py-5">
        <Image className="" src={HotelDesktopNavBar} alt="desktop navbar" />
      </div>

      <div className="h-fit flex flex-row justify-between py-5">
        <div>
          <div className="h-full flex flex-col jusitfy-end">
            <div>
              <Image className="" src={HotelMobileHeader} alt="mobile header" />
            </div>
            <div className="h-full flex flex-col justify-end">
              <div className="bg-white flex justify-center">
                <Image className="" src={HotelRoomOptionsBar} alt="room options bar" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Image className="" src={HotelCalendar} alt="calendar" />
        </div>
        <div>
          <Image className="" src={HotelCheckout} alt="checkout" />
        </div>
        <div>
          <Image className="" src={HotelSummaryWidget} alt="summary widget" />
        </div>
      </div>
    </div>
  );
};

const HotelComponents = () => {
  return (
    <div className={styles.mobilecontainer}>

      <div className={styles.row}>
        <div>
          <Image className="" src={HotelColorPalette} alt="color palette" />
        </div>
        <div>
          <Image className="" src={HotelFonts} alt="fonts" />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <div>
            <Image className="" src={HotelMobileHeader} alt="mobile header" />
          </div>
          <div>
            <Image className="" src={HotelMobileStatusStepper} alt="mobile status stepper" />
          </div>
        </div>
        <div>
          <Image className="" src={HotelCalendar} alt="calendar" />
        </div>
      </div>

      <div className={styles.row}>
        <div>
          <Image className="" src={HotelCheckout} alt="checkout" />
        </div>
        <div>
          <Image className="" src={HotelSummaryWidget} alt="summary widget" />
        </div>
      </div>
    </div>
  )
}

export { HotelDesign };
