import Link from "next/link";

import Meta from "layouts/meta";
import Main from "layouts/main";

import SlideShow from "components/slideShow";
import Section from "components/section";
import Video from "components/video";
import Button from "components/button";

import { getAllSlides } from "lib/slides";

import styles from "styles/casestudies.module.css";

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
      <div className={`${styles.sectionsContainer}`}>
          <Section id="kindle-book-clubs" className={`gap-20`} >
            <div className="flex flex-col justify-center align-middle w-1/4">
              <Video videoUrl="https://www.youtube.com/embed/ZVuToMilP0A" className="" />
            </div>
            <div className="flex flex-col justify-center align-middle w-5/12 h-[41.666667%]">
              <SlideShow slides={kindleSlides} className="" aboveFold={true} scale={0.75} />
            </div>
            {/* <SlideShow slides={kindleSlides} className="hidden h-0 lg:flex lg:h-auto" aboveFold={true} scale={0.75} /> */}
            {/* <SlideShow slides={kindleSlidesMobile} className="lg:hidden" aboveFole={true} scale={1} /> */}
          </Section>

          <Section id="matchbox-marketplace" darktheme={false} className="gap-20">
            <div className="flex flex-col justify-center align-middle w-1/4">
              <Video videoUrl="https://www.youtube.com/embed/ZVuToMilP0A" className="" />
            </div>
            <div className="flex flex-col justify-center align-middle w-5/12 h-[41.666667%]">
              <SlideShow slides={matchboxSlides} className="" aboveFold={false} scale={0.75} darktheme={false} />
            </div>
            {/* <SlideShow slides={matchboxSlides} darktheme={false} className="hidden lg:flex" scale={0.75} /> */}
            {/* <SlideShow slides={matchboxSlidesMobile} className="lg:hidden" darktheme={false} mobile={true} /> */}
          </Section>

          <Section id="in-progress" className="gap-10">
            <div className="flex flex-col justify-center align-middle w-1/4">
              <Video videoUrl="https://www.youtube.com/embed/ZVuToMilP0A" className="" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <SlideShow slides={lejitSlides} className="" scale={0.75} />
            </div>
            {/* <SlideShow slides={lejitSlides} className="hidden lg:flex" scale={0.75} /> */}
            {/* <SlideShow slides={lejitSlidesMobile} className="lg:hidden" mobile={true} /> */}
            <Link href="/designs">
              <Button text="but wait, there's more!" />
            </Link>
          </Section>
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
