import { useState } from "react";

import { useRouter } from "next/router";

import * as Menu from "@radix-ui/react-navigation-menu";
import { CopyIcon } from '@radix-ui/react-icons';

import styles from "styles/navbar.module.css";

import { AppConfig } from 'utils/AppConfig';

export default function NavMenu() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText(AppConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 500);
  };

  return (
    <div className="lg:flex justify-center py-5 w-full hidden text-[0.65em] relative z-10" id="navbar">
      <div className="absolute">
        <Menu.Root className="w-full flex flex-wrap items-center justify-center mx-auto">
          <Menu.List className="flex-row text-center flex">

            <Menu.Item>
              <Link href="/">
                HOME
              </Link>
            </Menu.Item>

            <Menu.Item>
              <Menu.Trigger>
                <Link href="/case-studies" >CASE STUDIES</Link>
              </Menu.Trigger>
              <Menu.Content className={`${styles.content}`}>
                <Menu.Sub>
                  <Menu.List>
                    <Menu.Item>
                      <Link href="/case-studies#kindle-book-clubs" >
                        Kindle Book Clubs
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link href="/case-studies#matchbox-marketplace" >
                        Matchbox Marketplace
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link href="/case-studies#in-progress">
                        In Progress
                      </Link>
                    </Menu.Item>
                  </Menu.List>
                  {/* <Menu.Viewport className={`${styles.content} ${styles.viewport}`} /> */}
                </Menu.Sub>
              </Menu.Content>
            </Menu.Item>

            <Menu.Item>
              <Menu.Trigger>
                <Link href="/designs" >
                  UI/VISUAL DESIGNS
                </Link>
              </Menu.Trigger>
              <Menu.Content className={styles.content}>
                <Menu.Sub>
                  <Menu.List>
                    <Menu.Item>
                      <Link href="/designs#hotel" >
                        Hotel Booking
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link href="/designs#mobile-email">
                        Mobile Email
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link href="/designs#book-box">
                        Book Box
                      </Link>
                    </Menu.Item>

                    <Menu.Indicator className={styles.indicator} />
                  </Menu.List>
                  {/* <Menu.Viewport className={`${styles.content} ${styles.viewport}`} /> */}
                </Menu.Sub>
              </Menu.Content>
            </Menu.Item>

            <Menu.Item>
              <Link href="/resume">
                RESUME
              </Link>
            </Menu.Item>

            <Menu.Item>
              <Menu.Trigger>
                <span className={styles.navlink} >CONTACT</span>
              </Menu.Trigger>
              <Menu.Content className={styles.content}>
                <Menu.Sub>
                  <Menu.List className="">

                    <Menu.Item>
                      <button onClick={handleEmailClick} className={`cursor-pointer ${styles.navlink}`} >
                        <span className={(copied ? " " : "hidden ") + "kwhite text-center"}>Copied!</span>
                        <span className={`flex flex-row items-center ${(!copied ? "" : "invisible h-0")}`}> Email me!&nbsp; <CopyIcon /> </span>
                      </button>
                    </Menu.Item>

                    <Menu.Item>
                      <a target="_blank" rel="noopener noreferrer" href={AppConfig.linkedin} className={styles.navlink}>
                        LinkedIn
                      </a>
                    </Menu.Item>

                  </Menu.List>
                  {/* <Menu.Viewport className={`${styles.content} ${styles.viewport}`} /> */}
                </Menu.Sub>
              </Menu.Content>
            </Menu.Item>

          </Menu.List>
          {/* <Menu.Viewport className={`${styles.content} ${styles.viewport}`} /> */}
        </Menu.Root>
      </div>
    </div>
  );
}



const Link = ({ href, ...props }) => {
  const router = useRouter();
  const isActive = (router.asPath === href) && !href.includes('#');

  return (
    <Menu.Link href={href} className={`${styles.navlink} ${props.className}`} active={isActive} {...props} />
  )
};