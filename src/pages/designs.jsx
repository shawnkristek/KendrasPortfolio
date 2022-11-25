import React from 'react';

import Image from 'next/image';

import Meta from "layouts/meta";
import Main from "layouts/main";

import Section from 'components/section';


import {
    Calendar,
    Checkout,
    ColorPalette,
    DesktopNavBar,
    Fonts,
    MobileStatusStepper,
    MobileHeader,
    RoomOptionsBar,
    SummaryWidget,
} from 'components/designImages';


export default function Designs() {
    return (
        <Main
            meta={
                <Meta
                    title="Kendra Wright: UX Designs"
                    description="A collection of Kendra Wright's favorite UX Design projects."
                />
            }
        >
            <Section className="">
                <div className='w-[80%] xl:w-[60%] mx-auto'>
                    <LeHotel />
                </div>
            </Section>
            <Section darktheme={false}></Section>
            <Section ></Section>
        </Main>
    );
}


const LeHotel = () => {
    return (
        <div className="w-full">
            <div className="w-full bg-blue-500 h-[35vh] mb-10">
                Prototype
            </div>

            <div className="mx-auto">

                {/* Row One */}
                <div className="flex flex-row justify-between gap-5 w-full mb-10">
                    <div className="">
                        <Image className="" src={ColorPalette} alt="color palette" />
                    </div>
                    <div>
                        <Image className="" src={Fonts} alt="fonts" />
                    </div>
                    <div>
                        <Image className="" src={MobileStatusStepper} alt="mobile status stepper" />
                    </div>
                </div>

                {/* Row Two */}
                <div className="flex flex-row justify-between gap-5 w-full mb-10">
                    <Image className="" src={DesktopNavBar} alt="desktop navbar" />
                </div>

                {/* Row Three */}
                <div className="flex flex-row justify-between gap-5 w-full">
                    <div className="relative">
                        <div>
                            <Image className="" src={MobileHeader} alt="mobile header" />
                        </div>
                        <div className='absolute bottom-0 w-full'>
                            <div className="bg-white flex justify-center w-full">
                                <Image className="" src={RoomOptionsBar} alt="room options bar" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image className="" src={Calendar} alt="calendar" />
                    </div>
                    <div>
                        <Image className="" src={Checkout} alt="checkout" />
                    </div>
                    <div>
                        <Image className="" src={SummaryWidget} alt="summary widget" />
                    </div>
                </div>

            </div>
        </div>
    )
}
