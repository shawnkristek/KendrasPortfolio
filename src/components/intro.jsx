import Image from "next/image";
import Link from "next/link";

import Button from "components/button";
import Footer from 'components/footer';

import { AppConfig } from "utils/AppConfig";

import Kendra from "../../public/images/kendra-wright.jpg";

import styles from 'styles/intro.module.css';

export default function Intro() {
  return (
    <div className={`${styles.container} md:max-w-[80vw] landscape:max-w-[80%] mx-auto`}>
      <KendraPhoto />
      <AboutKendra />
    </div>
  );
}

const KendraPhoto = () => {
  return (
    <Image
      alt="Kendra Wright UX Designer"
      priority
      src={Kendra}
      className={`${styles.photo} ring-2 ring-[#835f02]`}
    />
  )
}

const AboutKendra = () => {
  return (
    <div className={`text-center ${styles.about}`}>
      <h1 className={`${styles.header} brown-sugar gold`}>{AppConfig.fullName}</h1>
      <p className={styles.copy}>
        Hey, I’m {AppConfig.firstName}! I’m a UX Designer in Salt Lake City. I’ve always been creative and a problem
        solver, but also data driven and analytical. I love that UX allows me to put all of these skills and passions
        to use. I also have a deep drive to help others and spent many years in customer support roles empathizing
        with my users. I have experience in many different industries, including e-commerce, real estate, health &
        fitness, food service, and beauty & wellness.
      </p>
      <p className={`${styles.copy}`}>
        Some of the things I love are nature <span role="img" aria-label="tree"> 🌳, </span> fantasy books <span role="img" aria-label="elf"> 🧝‍♀️, </span> my cats <span role="img" aria-label="cats"> 🐈, </span> cool tattoos <span role="img" aria-label="skull"> 💀, </span> baking <span role="img" aria-label="cupcake"> 🧁, </span> iced coffee <span role="img" aria-label="coffee"> ☕, </span> and martial arts <span role="img" aria-label="karate"> 🥋. </span>
      </p>
      <Link href="/case-studies" className="flex justify-center pt-[0.5rem]">
        <Button text="Check out my work" className={styles.button} />
      </Link>
      <Footer />
    </div>
  )
}
