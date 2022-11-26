import React from 'react';

import Meta from "layouts/meta";
import Main from "layouts/main";

import Section from 'components/section';
import { HotelDesign } from 'components/hotelDesign';
import { BookishDesign } from 'components/BookishDesign';
import { EmailDesign } from 'components/emailDesign';


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
                    <HotelDesign />
                </div>
            </Section>
            <Section darktheme={false}>
                <div className='w-[80%] xl:w-[60%] mx-auto'>
                    <BookishDesign />
                </div>
            </Section>
            <Section >
                <div className='w-[80%] xl:w-[60%] mx-auto'>
                    <EmailDesign />
                </div>
            </Section>
        </Main>
    );
}