import { useState } from "react";

import Image from "next/image";

import Meta from "layouts/meta";
import Main from "layouts/main";

import { ResumePage1, ResumePage2 } from "lib/resumeImages";
import { DribbbleIcon, LinkedInIcon, LetterIcon, DownloadIcon, CopyIcon } from "lib/icons";

import { AppConfig } from "utils/AppConfig";

import styles from 'styles/resume.module.css';


export default function Resume() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText(AppConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 500);
  };

  const SocialButtons = () => {
    return (
      <div className={`flex flex-row gap-5 px-1 py-2 justify-center lg:justify-start lg:pl-2 w-full`}>
        <button onClick={handleEmailClick}>
          <Image src={LetterIcon} alt="email icon" className={copied ? "hidden" : ""} />
          <Image src={CopyIcon} alt="copy icon" className={!copied ? "hidden" : ""} />
        </button>
        <a rel="noopener noreferrer" href={AppConfig.dribbble} target="_blank">
          <Image src={DribbbleIcon} alt="dribbble icon" />
        </a>
        <a href={AppConfig.linkedin} target="_blank" rel="noopener noreferrer">
          <Image src={LinkedInIcon} alt="linkedin icon" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href={AppConfig.resume}>
          <Image src={DownloadIcon} alt="download icon" />
        </a>
      </div>
    );
  };

  return (
    <Main meta={<Meta title="Kendra Wright: Resume" description="Download Kendra Wright's UX Designer Resume." />}>
      <section className={`${styles.container}`}>
        <div className="mycontainer">
          <div className="lg:px-10">
            <div>
              <SocialButtons />
            </div>
            <div className={styles.split}>
              <div>
                <Image src={ResumePage1} priority className={styles.photo} alt="Kendra Wright's UX designer resume page 1."/>
              </div>
              <div>
                <Image src={ResumePage2} priority className={styles.photo} alt="Kendra Wright's UX designer resume page 2."/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Main >
  );
}
