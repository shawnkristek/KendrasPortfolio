import { useState } from 'react';

import Image from 'next/image';

import {
  BookColorPalette,
  BookFonts,
  BookHero,
  BookItem,
  BookLogo,
  BookSummary,
  BookCartWishList,
  BookNavBar,
  BookBoxDesktop,
  BookBoxMobile,
} from 'lib/designImages';

import styles from 'styles/designs.module.css';

const BookishDesign = () => {
  const [pressed, setPressed] = useState(false);

  const handlePressed = () => {
    setPressed(!pressed);
  };

  return (
    <section className={styles.section}>
      <div className="flex flex-col h-full justify-end">
        <div className={styles.container}>
          <div className="">
            {/* <div className={`${!pressed ? "hidden" : ""} flex justify-center`}>
              <BookishDesignComponents />
            </div> */}
            <div className={`${pressed ? "hidden" : ""}`}>
              <div className={`${styles.container}`}>
                <div>
                  <h2 className="raleway kwhite text-[1rem] lg:text-[1.2rem] text-center lg:px-40">
                    The Bewitched Book Box - UI/Visual design and branding for a book box subscription's desktop and mobile product page and checkout flow
                  </h2>
                </div>
                <div className={styles.split}>
                  <div>
                    <Image src={BookBoxDesktop} alt="mockup of a design for a Parisian hotel's desktop booking flow" />
                  </div>
                  <div>
                    <Image src={BookBoxMobile} alt="mockup of a design for a Parisian hotel's mobile booking flow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="underline text-[1rem] text-center">
            <a target="_blank" rel="noopener noreferrer"
              href="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FpRDvc4Jr0qdDlzByQ07XOS%2FKendra-Wright-Portfolio%3Fpage-id%3D11%253A3964%26node-id%3D11%253A6014%26viewport%3D310%252C367%252C0.07%26scaling%3Dscale-down%26starting-point-node-id%3D11%253A6014"
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
}

const BookishDesignComponents = ({ className, ...props }) => {
  return (
    <div id="book-box" className={`${className} h-full max-w-max flex flex-col justify-center align-middle gap-5 lg:gap-10`}>
      {/* Design Components */}
      <div className='flex flex-row justify-between gap-5 lg:gap-10'>
        <div>
          <Image src={BookColorPalette} alt="bookish color palette" />
        </div>
        <div className=''>
          <Image src={BookLogo} alt="bookish logo" />
        </div>
        <div className=''>
          <Image src={BookFonts} alt="bookish fonts" />
        </div>
        <div className='my-auto'>
          <Image src={BookCartWishList} alt="bookish buttons" />
        </div>
      </div>
      <div className='w-full flex flex-col justify-center bg-[#7E0000]'>
        <Image src={BookNavBar} alt="bookish navbar" />
      </div>
      <div className='flex flex-row justify-between gap-5 lg:gap-10'>
        <div>
          <Image src={BookItem} alt="bookish headers" />
        </div>
        <div>
          <Image src={BookHero} alt="bookish hero image" />
        </div>
        <div>
          <Image src={BookSummary} alt="bookish order summary" />
        </div>
      </div>
    </div>
  );
}

export {
  BookishDesign,
}