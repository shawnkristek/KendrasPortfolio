import Link from "next/link";

import Meta from "layouts/meta";
import Main from "layouts/main";

import SlideShow from "components/slideShow";
import Button from "components/button";

import { getAllSlides } from "lib/slides";

import styles from 'styles/casestudies.module.css';

export default function SlideShowPage({
  kindleSlides,
  kindleSlidesMobile,
  matchboxSlides,
  matchboxSlidesMobile,
  lejitSlides,
  lejitSlidesMobile,
}) {

  return (
    <Main
      meta={
        <Meta
          title="Kendra Wright: Case Studies"
          description="A collection of Kendra Wright's favorite UX Design case studies."
        />
      }
    >
      <div className="">

        <div id="kindle-book-clubs" className={`${styles.section} ${styles.firstsection}`} >
          <div className={styles.vsplit}>
            <div className="flex justify-center pb-3">
              <iframe
                className="aspect-video w-[25rem] max-w-full"
                src={"https://www.youtube.com/embed/iCUQ5gxlOe0" + "?rel=0"}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className={styles.slidecontainer}>
              <SlideShow slides={kindleSlides} className="" aboveFold={true} scale={0.75} />
            </div>
            <div className="flex justify-center underline text-[1rem]">
              <a target="_blank" rel="noopener noreferrer" href="https://www.figma.com/proto/gkdkNmPxaW2Q4D3DlFcFT5/%E2%9C%85-Kendra-Wright---L5?page-id=1640%3A6651&node-id=1640%3A6833&viewport=201%2C249%2C0.11&scaling=scale-down&starting-point-node-id=1640%3A6833&show-proto-sidebar=1">Figma Prototype</a>
            </div>
          </div>
        </div>

        <div id="matchbox-marketplace" className={`${styles.section} bg-neutral`} >
          <div className={styles.vsplit}>
            <div className="flex justify-center pb-3">
              <iframe
                className="aspect-video w-[25rem] max-w-full"
                src={"https://www.youtube.com/embed/jopFVQT8m3A" + "?rel=0"}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className={styles.slidecontainer}>
              <SlideShow slides={matchboxSlides} className="" aboveFold={false} scale={0.75} darktheme={false} />
            </div>
            <div className="flex justify-center teal underline text-[1rem]">
              <a href="https://www.figma.com/proto/pRDvc4Jr0qdDlzByQ07XOS/Kendra-Wright-Portfolio?page-id=11%3A1160&node-id=11%3A1331&viewport=502%2C34%2C0.04&scaling=min-zoom&starting-point-node-id=11%3A1331&show-proto-sidebar=1" rel="noopener noreferrer" target="_blank">Figma Prototype</a>
            </div>
          </div>
        </div>

        <div id="in-progress" className={`${styles.section} flex`}>
          <div className={`${styles.vsplit}`}>
            <div className={styles.slidecontainer}>
              <SlideShow slides={lejitSlides} className="" scale={0.75} />
            </div>
            <div className="pt-5">
              <Link href="/designs" className="flex justify-center ">
                <Button text="but wait, there's more!" className={styles.button} />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </Main>
  );
}

export async function getStaticProps() {
  const kindleSlides = getAllSlides("kindleclubs/");
  const kindleSlidesMobile = getAllSlides("kindleclubs/mobile/");
  const matchboxSlides = getAllSlides("matchbox/");
  const matchboxSlidesMobile = getAllSlides("matchbox/mobile/");
  const lejitSlides = getAllSlides("lejit/");
  const lejitSlidesMobile = getAllSlides("lejit/mobile/");

  return {
    props: {
      kindleSlides,
      kindleSlidesMobile,
      matchboxSlides,
      matchboxSlidesMobile,
      lejitSlides,
      lejitSlidesMobile,
    },
  };
}
