import { Router, useRouter } from 'next/router';
import { AppConfig } from '../utils/AppConfig';

export default function Intro() {
    const router = useRouter();
    return (
        <div className="flex flex-row justify-center mt-10 h-auto">
            <div className="w-5/12 justify-center">
                <div className="px-10 flex justify-center">
                    <img src='images/kendra.jpg' alt="Kendra Wright" width="80%" height="auto" className="rounded-3xl"/>
                </div>
            </div>
            <div className="flex flex-col text-center w-5/12">
                <h1 className="brown-sugar text-9xl">
                    {AppConfig.fullName}
                </h1>
                <div className="px-24">
                    <p>
                        Hey, I’m {AppConfig.firstName}! I’m a UX Designer in Salt Lake City. I’ve always been creative and a problem solver, but also data driven and analytical. I love that UX allows me to put all of these skills and passions to use. I also have a deep drive to help others and spent many years in customer support roles empathizing with my users. I have experience in many different industries, including e-commerce, real estate, health & fitness, food service, and beauty & wellness.
                    </p>
                    <br />
                    <p>
                        Some of the things I love are nature, fantasy books, my cats, cool tattoos, baking, iced coffee, and martial arts.
                    </p>
                </div>
            </div>
        </div>
    );
}