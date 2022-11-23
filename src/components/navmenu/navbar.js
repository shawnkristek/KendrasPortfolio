import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import * as Menu from "@radix-ui/react-navigation-menu";
import * as HoverCard from "@radix-ui/react-hover-card";

import { CopyIcon } from '@radix-ui/react-icons';

import styles from "styles/navbar.module.css";

import {AppConfig} from 'utils/AppConfig';

export default function NavMenu() {
    const router = useRouter();
    const [copied, setCopied] = useState(false);

    const handleEmailClick = () => {
        navigator.clipboard.writeText(AppConfig.email);
        setCopied(true);
        let timer = setTimeout(() => setCopied(false), 500);
    };

    const isActivePage = (page) => {
        return page == router.pathname ? ` ${styles.active}` : "";
    };

    const hoverDelay = 0;

    return (
        <div className="lg:flex justify-center py-5 w-full hidden text-[0.65em]">
            <Menu.Root className="w-full flex flex-wrap items-center justify-center mx-auto">
                <Menu.List className="flex-row text-center flex">
                    <Menu.Link href="/">
                        <Menu.Item className={styles.navlink + isActivePage("/")}>HOME</Menu.Item>
                    </Menu.Link>
                    <HoverCard.Root openDelay={hoverDelay} closeDelay={hoverDelay} >
                        <HoverCard.Trigger asChild>
                            <Menu.Link href="/case-studies">
                                <Menu.Item className={styles.navlink + isActivePage("/case-studies")}>CASE STUDIES</Menu.Item>
                            </Menu.Link>
                        </HoverCard.Trigger>
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

                    <HoverCard.Root openDelay={hoverDelay} closeDelay={hoverDelay}>
                        <HoverCard.Trigger asChild>
                            <Menu.Link href="/designs" >
                                    <Menu.Item className={styles.navlink + isActivePage("/designs")}>UI/VISUAL DESIGNS</Menu.Item>
                            </Menu.Link>
                        </HoverCard.Trigger>
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
                                            <div className={"flex flex-row items-center " + (!copied ? "" : "invisible h-0")}>Email me!&nbsp;<CopyIcon /></div>
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
