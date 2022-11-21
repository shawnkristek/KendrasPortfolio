import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import * as Menu from "@radix-ui/react-navigation-menu";
import * as HoverCard from "@radix-ui/react-hover-card";

import { CopyIcon } from '@radix-ui/react-icons';

import OneTwoHoverButton from "./oneTwoHoverButton";

import styles from "./navbar.module.css";

export default function NavMenu() {
    const router = useRouter();
    const [copied, setCopied] = useState(false);
    const [openCaseStudies, setOpenCaseStudies] = useState(false);
    const [openDesigns, setOpenDesigns] = useState(false);

    const handleOpenCaseStudies = () => {
        setOpenCaseStudies(!openCaseStudies);
    }

    const handleOpenDesigns = () => {
        setOpenDesigns(!openDesigns);
    }

    const handleEmailClick = () => {
        navigator.clipboard.writeText("kendrauxd@gmail.com");
        setCopied(true);
        let timer = setTimeout(() => setCopied(false), 500);
    };

    const isActivePage = (page: string) => {
        return page == router.pathname ? ` ${styles.active}` : "";
    };

    const hoverDelay = 0;

    return (
        <div className="md:flex justify-center py-5 w-full hidden text-[0.65em]">
            <Menu.Root className="w-full flex flex-wrap items-center justify-center mx-auto">
                <Menu.List className="flex-row text-center flex">
                    <Menu.Link href="/">
                        <Menu.Item className={styles.navlink + isActivePage("/")}>HOME</Menu.Item>
                    </Menu.Link>
                    <HoverCard.Root openDelay={hoverDelay} closeDelay={hoverDelay} onOpenChange={handleOpenCaseStudies} open={openCaseStudies}>
                        <OneTwoHoverButton href="/case-studies" open={!openCaseStudies}>
                            <Menu.Item className={styles.navlink + isActivePage("/case-studies")}>CASE STUDIES</Menu.Item>
                        </OneTwoHoverButton>
                            <HoverCard.Content>
                                <ul className="bg-[#173738] rounded text-center">
                                    <Link href="/case-studies#kindle-book-clubs">
                                        <li className={styles.navlink}>Kindle Book Clubs</li>
                                    </Link>
                                    <Link href="/case-studies#matchbox-marketplace">
                                        <li className={styles.navlink}>Matchbox Marketplace</li>
                                    </Link>
                                    <Link href="/case-studies#in-progress">
                                        <li className={styles.navlink}>In Progress</li>
                                    </Link>
                                </ul>
                            </HoverCard.Content>
                    </HoverCard.Root>

                    <HoverCard.Root openDelay={hoverDelay} closeDelay={hoverDelay} open={openDesigns} onOpenChange={handleOpenDesigns}>
                        <OneTwoHoverButton href="/designs" open={!openDesigns}>
                                <Menu.Item className={styles.navlink + isActivePage("/designs")}>UI/VISUAL DESIGNS</Menu.Item>
                        </OneTwoHoverButton>
                            <HoverCard.Content>
                                <ul className="bg-[#173738] rounded text-center">
                                    <Link href="/designs#hotel-booking">
                                        <li className={styles.navlink}> Hotel Booking </li>
                                    </Link>
                                    <Link href="/designs#book-box">
                                        <li className={styles.navlink}> Book Box </li>
                                    </Link>
                                    <Link href="/designs#mobile-email">
                                        <li className={styles.navlink}> Mobile Email </li>
                                    </Link>
                                </ul>
                            </HoverCard.Content>
                    </HoverCard.Root>
                    <Menu.Link href="/resume">
                        <Menu.Item className={styles.navlink + isActivePage("/resume")}>RESUME</Menu.Item>
                    </Menu.Link>
                    <HoverCard.Root openDelay={hoverDelay} closeDelay={hoverDelay}>
                        <HoverCard.Trigger asChild>
                            <Menu.Item className={styles.navlink}>CONTACT</Menu.Item>
                        </HoverCard.Trigger>
                            <HoverCard.Content>
                                <ul className="bg-[#173738] rounded text-center">
                                    <button onClick={handleEmailClick}>
                                        <li className={styles.navlink}>
                                            <div className={(copied ? " " : "hidden ") + "kwhite text-center"}>Copied!</div>
                                            <div className={"flex flex-row items-center " + (!copied ? "" : "invisible h-0")}>Copy my email &nbsp;<CopyIcon /></div>
                                        </li>
                                    </button>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kendrauxd">
                                        <li className={styles.navlink}>LinkedIn</li>
                                    </a>
                                </ul>
                            </HoverCard.Content>
                    </HoverCard.Root>
                </Menu.List>
            </Menu.Root>
        </div>
    );
}
