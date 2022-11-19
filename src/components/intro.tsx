import { AppConfig } from '../utils/AppConfig';
import Link from 'next/link';

export default function Intro() {
    return (
        <div className="w-full flex flex-col gap-10 xl:flex xl:flex-row">
            <div className="w-full flex justify-center">
                <img src='/images/kendra.jpg' alt="Kendra Wright" className="max-w-xs md:max-w-lg h-auto rounded-2xl hidden md:flex p-1 ring-2 ring-[#835f02] object-cover"/>
                <img src="/images/kendra.jpg" alt="Kendra Wright" className="avatar p-1 ring-4 ring-[#835f02] md:hidden" />
            </div>
            <div className="text-center mx-auto my-auto max-w-2xl">
                <h1 className="brown-sugar gold mb-10">
                    {AppConfig.fullName}
                </h1>
                    <p className="px-10">
                        Hey, I’m {AppConfig.firstName}! I’m a UX Designer in Salt Lake City. I’ve always been creative and a problem solver, but also data driven and analytical. I love that UX allows me to put all of these skills and passions to use. I also have a deep drive to help others and spent many years in customer support roles empathizing with my users. I have experience in many different industries, including e-commerce, real estate, health & fitness, food service, and beauty & wellness.
                    <br />
                    <br />
                        Some of the things I love are nature <span role="img" aria-label="tree">🌳</span>, fantasy books <span role="img" aria-label="elf">🧝‍♀️</span>, my cats <span role="img" aria-label="cats">🐈</span>, cool tattoos <span role="img" aria-label="skull">💀</span>, baking <span role="img" aria-label="cupcake">🧁</span>, iced coffee <span role="img" aria-label="coffee">☕</span>, and martial arts <span role="img" aria-label="karate">🥋</span>.
                    <br />
                    <br />
                        {/* Check out my work <Link href="/case-studies" className="gold font-semibold hover:text-gray-300 hover:underline hover:transition hover:duration-500">here.</Link> */}
                    </p>
                    <Link href="/case-studies">
                        <button type="button" className="text-white bg-[#835f02] focus:ring-1 focus:outline-none ring-white shadow-sm shadow-[#835f02]/50 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 hover:scale-105 hover:ring-2 transition duration-200 font-medium">Check out my work</button>
                    </Link>
            </div>
        </div>
    );
}