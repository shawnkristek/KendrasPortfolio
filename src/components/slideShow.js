import { useRef } from "react";

import Image from "next/image";

import { TriangleLeftIcon, TriangleRightIcon } from "@radix-ui/react-icons";

import { Carousel } from "@mantine/carousel";

export default function SlideShow({
  slides,
  darktheme = true,
  className,
  aboveFold = false,
  scale = 1.0,
  ...props
}) {
  const controlColor = darktheme ? "#c5cdcd" : "#835f02";

  const maxHeightOfAllSlides = Math.max(...slides.map((slide) => slide.height));
  const maxWidthOfAllSlides = Math.max(...slides.map((slide) => slide.width));

  return (
    <Carousel
      className={className}
      sx={{ maxWidth: maxWidthOfAllSlides * scale }}
      styles={styles}
      height={maxHeightOfAllSlides * scale}
      slideGap="md"
      align="center"
      nextControlIcon={<TriangleRightIcon color={controlColor} />}
      previousControlIcon={<TriangleLeftIcon color={controlColor} />}
    >
      {slides.map((slide) => (
        <Carousel.Slide className="flex align-middle justify-center" key={slide.key}>
          <Image
            height={slide.height * scale}
            width={slide.width * scale }
            className="my-auto mx-auto"
            src={slide.url}
            alt={slide.key}
            priority={aboveFold ? true : false}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

const styles = {
  control: {
    marginLeft: "-50px",
    marginRight: "-50px",
    scale: "300%",
    boxShadow: "none",
    border: "none",
    background: "none",
    transition: "width 250ms ease",
    "&[data-inactive]": {
      opacity: 0,
      cursor: "default",
    },
  },
};
