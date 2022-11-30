import React from 'react';

import Meta from "layouts/meta";
import Main from "layouts/main";

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
            <div id="hotel">
                <HotelDesign />
            </div>
            <div id="mobile-email">
                <EmailDesign />
            </div>
            <div id="book-box" >
                <BookishDesign />
            </div>
        </Main>
    );
}

