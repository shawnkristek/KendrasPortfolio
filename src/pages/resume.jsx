import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Meta from "layouts/meta";
import Main from "layouts/main";

import Section from 'components/section';
import { ResumePage1, ResumePage2 } from "components/resumeImages";
import { DribbbleIcon, LinkedInIcon, LetterIcon, DownloadIcon, CopyIcon } from "components/icons";

import { AppConfig } from "utils/AppConfig";

import styles from 'styles/resume.module.css';

export default function Resume() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText(AppConfig.email);
    setCopied(true);
    let timer = setTimeout(() => setCopied(false), 500);
  };

  const SocialButtons = ({ ...props }) => {
    return (
      <div className={`flex flex-row gap-5 px-1 py-2 justify-center lg:justify-start w-full ${props.className}`}>
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

  const ResumeComp = () => {
    return (
      <div className="h-full">
        <SocialButtons />
        <div className={styles.resumePages}>
          {/* <Image src={ResumePage1} priority />
          <Image src={ResumePage2} priority /> */}
        </div>
      </div>

    )
  }

  return (
    <Main meta={<Meta title="Kendra Wright: Resume" description="Download Kendra Wright's UX Designer Resume." />}>
      <Section darktheme={false}>
        <ResumeComp />
      </Section>
    </Main >
  );
}
