import { useState } from 'react';
import Image from 'next/image';

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
} from 'lib/designImages';

const HotelDesign = () => {
  const [pressed, setPressed] = useState(false);

  const handlePressed = () => {
    setPressed(!pressed);
  };

  return (
    <div className="h-full w-full flex flex-col justify-center align-middle items-center">
      <div className={`h-full w-full flex-col justify-center align-middle items-center`}>
        {/* prototype */}
        <iframe
          className={`${pressed ? "hidden" : ""} h-full w-full flex-col justify-center align-middle items-center`}
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FgkdkNmPxaW2Q4D3DlFcFT5%2F%25E2%259C%2585-Kendra-Wright---L5%3Fpage-id%3D1172%253A1368%26node-id%3D1209%253A1601%26viewport%3D-3817%252C1247%252C0.48%26scaling%3Dscale-down%26starting-point-node-id%3D1158%253A1203"
          allowFullScreen
        ></iframe>
        {/* component images */}
        <div className={`${!pressed ? "hidden" : ""} h-full w-full flex justify-center align-middle`} >
          <HotelDesignComponents className={`${!pressed ? "hidden" : ""}`} />
        </div>
      </div>
      {/* toggle switch */}
      <button onClick={handlePressed} className={`bg-[#835f02] focus:ring-1 focus-outline-none ring-[#c5cdcd] shadow-sm shadow-[#835f02]/50 rounded-lg text-sm px-5 py-2.5 text-center hover:scale-105 hover:ring-2 transistion duration-200 font-semibold mt-8 ${pressed ? "bg-[#c5cdcd] text-[#835f02]" : ""}`}>
        <span className={`${!pressed ? "hidden" : ""}`} >Figma Prototype</span>
        <span className={`${pressed ? "hidden" : ""}`}>Component Images</span>
      </button>
    </div>
  );
}

const HotelDesignComponents = ({ className, ...props }) => {
  return (
    <div className={`${className} h-full max-w-max flex flex-col justify-center align-middle gap-5 lg:gap-10`}>
      <div className='flex flex-row justify-between'>
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

      <div className='flex flex-row'>
        <Image className="" src={HotelDesktopNavBar} alt="desktop navbar" />
      </div>

      <div className='h-fit flex flex-row justify-between'>
        <div>
          <div className="h-full flex flex-col jusitfy-end">
            <div>
              <Image className="" src={HotelMobileHeader} alt="mobile header" />
            </div>
            <div className='h-full flex flex-col justify-end'>
              <div className='bg-white flex justify-center'>
                <Image className="" src={HotelRoomOptionsBar} alt="room options bar" />
              </div>
            </div>
          </div>
        </div>
        <div>
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
  )
}

export {
  HotelDesign,
}