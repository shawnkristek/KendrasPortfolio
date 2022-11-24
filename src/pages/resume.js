import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Meta from "layouts/meta";
import Main from "layouts/main";

import { ResumePage1, ResumePage2 } from "components/resumeImages";

import { DribbbleIcon, LinkedInIcon, LetterIcon, DownloadIcon, CopyIcon } from "components/icons";

import { AppConfig } from "utils/AppConfig";

export default function Resume() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText(AppConfig.email);
    setCopied(true);
    let timer = setTimeout(() => setCopied(false), 500);
  };

  const SocialButtons = ({...props}) => {
    return (
      <div className={`flex flex-row gap-3 px-1 py-2 justify-center lg:justify-start w-full ${props.className}`}>
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
      <div className="flex justify-center">
        <div className="w-[60%] flex flex-col justify-center items-center">
          <SocialButtons />
          <div className="flex gap-10 flex-col justify-start items-center lg:justify-center lg:flex-row">
            <Image src={ResumePage1} className="object-contain w-[80%] lg:w-[50%]" priority />
            <Image src={ResumePage2} className="object-contain w-[80%] lg:w-[50%]" priority />
          </div>
        </div>
      </div>
    </Main>
  );
}
