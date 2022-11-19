import Link from 'next/link';
import { useRouter } from 'next/router';

import {useState} from 'react';

import DropDown from '../dropdown';

import {
    caseStudyUrls,
    designUrls,
    // contactUrls,
} from './urls';

export default function NavBar() {
    const router = useRouter();
    const [copied, setCopied] = useState(false);

    const handleEmailClick = () => {
        navigator.clipboard.writeText('kendraudx@gmail.com');
        setCopied(true);
        let timer = setTimeout(() => setCopied(false), 500);
    }

    const handleContactLeave = () => {
        if (copied){
            setCopied(false);
        }
    }

    return (
        <div className="w-full flex justify-center py-5">
            <div className="w-full flex flex-wrap items-center justify-center mx-auto">
                <ul className="md:flex-row text-center text-lg hidden md:flex">
                    <Link href="/"><li className={(router.pathname == "/" ? "active" : "") + " nav-link"}>HOME</li></Link>
                    <DropDown urls={caseStudyUrls}>
                        <Link href="/case-studies"><li className={(router.pathname == "/case-studies" ? "active" : "") + " nav-link"}>CASE STUDIES</li></Link>
                    </DropDown>
                    <DropDown urls={designUrls}>
                        <Link href="/designs"><li className={(router.pathname == "/designs" ? "active" : "") + " nav-link"}>UI/VISUAL DESIGNS</li></Link>
                    </DropDown>
                    <Link href="/resume"><li className={(router.pathname == "/resume" ? "active" : "") + " nav-link"}>RESUME</li></Link>
                    <div className="dropdown" onMouseLeave={handleContactLeave}>
                        <button type="button" className="drop-btn">
                            <Link href=""><li className={(router.pathname == "/contact" ? "active" : "") + " nav-link"}>CONTACT</li></Link>
                        </button>
                        <div className="bg-[#173738] rounded drop-content">
                            <ul className="">
                                <button onClick={handleEmailClick}>
                                    <li className="drop-link">
                                        <span className={(!copied ? "" : "hidden ")}>kendraudx@gmail.com</span>
                                        <span className={(!copied ? "hidden " : " ") + "text-white"}>Copied!</span>
                                    </li>
                                </button>
                                <Link href="https://www.linkedin.com/in/kendraudx">
                                    <li className="drop-link">LinkedIn</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </ul>
                {/* <div className="fixed right-10">
                    <Link href="#"><button type="button" className="rounded-lg bg-[#835f02] px-5 py-2 hover:bg-slate-50 hover:text-[#835f02] hover:font-semibold hover:ease-in transition duration-100 focus:ring-4 hover:focus:ring-[#835f02] focus:ring-white">Contact Me</button></Link>
                </div> */}
            </div>
        </div>
    )
}
