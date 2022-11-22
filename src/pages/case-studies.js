import Link from 'next/link';

import Meta from "../layouts/meta";
import Main from "../layouts/main";

import SlideShow from "../components/slideShow";
import Section from "../components/section";
import Video from "../components/video";
import Button from "../components/button";

import { getAllSlides } from "../../lib/slides";

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
          description="A collection of Kendra Wrights' favorite UX Design case studies."
        />
      }
    >
        <Section id="kindle-book-clubs">
          <div className="">
            <Video />
            <SlideShow slides={kindleSlides} className="hidden lg:block" />
            <SlideShow slides={kindleSlidesMobile} className="lg:hidden" mobile={true} />
          </div>
        </Section>

        <Section id="matchbox-marketplace" darktheme={false}>
          <Video />
          <SlideShow slides={matchboxSlides} className="hidden lg:block" darktheme={false} />
          <SlideShow slides={matchboxSlidesMobile} className="lg:hidden" darktheme={false} mobile={true} />
        </Section>

        <Section id="in-progress">
          <Video />
          <SlideShow slides={lejitSlides} className="hidden lg:block" />
          <SlideShow slides={lejitSlidesMobile} className="lg:hidden" mobile={true} />
          <Link href="/designs">
            <Button text="but wait, there's more!" />
          </Link>
        </Section>
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
