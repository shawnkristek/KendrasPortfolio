import { useState } from "react";

import Image from "next/image";

import Meta from "layouts/meta";
import Main from "layouts/main";

import Section from 'components/section';
import { ResumePage1, ResumePage2 } from "lib/resumeImages";
import { DribbbleIcon, LinkedInIcon, LetterIcon, DownloadIcon, CopyIcon } from "lib/icons";

import { AppConfig } from "utils/AppConfig";


export default function Resume() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText(AppConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 500);
  };

  const SocialButtons = () => {
    return (
      <div className={`flex flex-row gap-5 px-1 py-2 justify-center lg:justify-start lg:pl-5 w-full`}>
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
      <div className="h-full w-fit max-w-max flex flex-col justify-start lg:justify-center mx-auto">
        <SocialButtons />
        <div className="h-full w-full lg:w-fit flex flex-col justify-start lg:justify-center gap-5 lg:gap-10 lg:flex-row">
          <Image src={ResumePage1} priority className="max-w-[80vw] lg:max-w-[40vw] max-h-[95%] w-auto aspect-auto"/>
          <Image src={ResumePage2} priority className="max-w-[80vw] lg:max-w-[40vw] max-h-[95%] w-auto aspect-auto"/>
        </div>
      </div>

    )
  }

  return (
    <Main meta={<Meta title="Kendra Wright: Resume" description="Download Kendra Wright's UX Designer Resume." />}>
      <Section className="h-full lg:h-screen" contentClassNames="w-full">
        <ResumeComp />
      </Section>
    </Main >
  );
}
