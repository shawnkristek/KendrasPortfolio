import { useState } from 'react';

import Image from 'next/image';

import {
  EmailColorPalette,
  EmailDropMenu,
  EmailExamples,
  EmailFont,
  EmailHighlight,
  EmailOverlay,
  EmailUndo,
  EmailInbox,
} from 'lib/designImages';

import styles from 'styles/designs.module.css';

const EmailDesign = () => {
  const [pressed, setPressed] = useState(false);

  const handlePressed = () => {
    setPressed(!pressed);
  };

  return (
    <section className={`${styles.section} bg-neutral`}>
      <div className="flex flex-col h-full justify-end">
        <div className={styles.container}>
          <div className="">
            {/* <div className={`${!pressed ? "hidden" : ""} flex justify-center`}>
              <EmailDesignComponents />
            </div> */}
            <div className={`${pressed ? "hidden" : ""}`}>
              <div className={`${styles.container}`}>
                <div>
                  <h2 className="raleway teal text-[1rem] lg:text-[1.2rem] text-center">
                    Mobile Email Inbox - Gmail reimagined with a drag and drop UI feature for common actions
                  </h2>
                </div>
                <div className={styles.split}>
                  <div>
                    <Image src={EmailInbox} alt="mockup of a design for a Parisian hotel's mobile booking flow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="underline teal text-[1rem] text-center"> */}
          <div className='text-center'>
            <a target="_blank" rel="noopener noreferrer"
              href="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FgkdkNmPxaW2Q4D3DlFcFT5%2F%25E2%259C%2585-Kendra-Wright---L5%3Fpage-id%3D569%253A2%26node-id%3D1328%253A2857%26viewport%3D-844%252C-379%252C0.2%26scaling%3Dscale-down%26starting-point-node-id%3D1328%253A2857"
            >
              <button className={`bg-[#835f02] focus:ring-1 focus-outline-none ring-[white] shadow-sm shadow-[#835f02]/50 rounded-lg text-sm px-5 py-2.5 text-center hover:scale-105 hover:ring-2 transistion duration-200 font-semibold ${pressed ? "bg-[white] text-[#835f02]" : ""}`}>
                Figma Prototype
              </button>
            </a>
          </div>
          <div className="flex justify-center">
            {/* <button onClick={handlePressed} className={`bg-[#835f02] focus:ring-1 focus-outline-none ring-[white] shadow-sm shadow-[#835f02]/50 rounded-lg text-sm px-5 py-2.5 text-center hover:scale-105 hover:ring-2 transistion duration-200 font-semibold ${pressed ? "bg-[white] text-[#835f02]" : ""}`}>
              <span className={`${!pressed ? "hidden" : ""}`} >Mockups</span>
              <span className={`${pressed ? "hidden" : ""}`}>Components</span>
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}



const EmailDesignComponents = ({ className, ...props }) => {
  return (
    <div className={`${className} h-full flex flex-col justify-center align-middle gap-5 lg:gap-10`}>

      <div className="flex flex-row justify-between gap-5 lg:gap-10">
        <div>
          <Image src={EmailColorPalette} alt="email color palette" />
        </div>
        <div>
          <Image src={EmailFont} alt="email fonts" />
        </div>
        <div>
          <div>
            <Image src={EmailUndo} alt="email undo" />
          </div>
          <div>
            <Image src={EmailHighlight} alt="email highlight" />
          </div>
        </div>
      </div>

      <div className='flex flex-row justify-between gap-5 lg:gap-10'>
        <div>
          <Image src={EmailExamples} alt="email examples" />
        </div>
        <div>
          <Image src={EmailDropMenu} alt="email drop menu" />
        </div>
        <div>
          <Image src={EmailOverlay} alt="email overlay" />
        </div>
      </div>

    </div>
  );
}

export {
  EmailDesign,
}
