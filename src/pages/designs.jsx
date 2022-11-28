import React from 'react';

import Meta from "layouts/meta";
import Main from "layouts/main";

import Section from 'components/section';
import { HotelDesign } from 'components/hotelDesign';
import { BookishDesign } from 'components/bookishDesign';
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
            <Section id="hotel" contentClassNames="w-full">
                <HotelDesign />
            </Section>
            <Section id="mobile-email" darktheme={false} contentClassNames="w-full">
                <EmailDesign />
            </Section>
            <Section id="book-box" contentClassNames="w-full">
                <BookishDesign />
            </Section>
        </Main>
    );
}

