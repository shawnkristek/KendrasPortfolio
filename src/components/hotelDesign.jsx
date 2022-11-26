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
} from 'components/designImages';

const HotelDesign = () => {
    return (
        <div className="w-full">
            <div className="w-full bg-blue-500 h-[35vh] mb-10">
                Prototype
            </div>

            <div className="mx-auto">

                {/* Row One */}
                <div className="flex flex-row justify-between gap-5 w-full mb-10">
                    <div className="">
                        <Image className="" src={HotelColorPalette} alt="color palette" />
                    </div>
                    <div>
                        <Image className="" src={HotelFonts} alt="fonts" />
                    </div>
                    <div>
                        <Image className="" src={HotelMobileStatusStepper} alt="mobile status stepper" />
                    </div>
                </div>

                {/* Row Two */}
                <div className="flex flex-row justify-between gap-5 w-full mb-10">
                    <Image className="" src={HotelDesktopNavBar} alt="desktop navbar" />
                </div>

                {/* Row Three */}
                <div className="flex flex-row justify-between gap-5 w-full">
                    <div className="relative">
                        <div>
                            <Image className="" src={HotelMobileHeader} alt="mobile header" />
                        </div>
                        <div className='absolute bottom-0 w-full'>
                            <div className="bg-white flex justify-center w-full">
                                <Image className="" src={HotelRoomOptionsBar} alt="room options bar" />
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
        </div>
    )
}


export {
    HotelDesign,
}