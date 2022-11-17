import Link from 'next/link';
import { useRouter } from 'next/router';

import DropDown from '../dropdown';

const caseStudyUrls = [ 
    {text: "Kindle Book Clubs", href: "/case-studies#kindle-book-clubs"},
    {text: "Matchbox Marketplace", href: "/case-studies#matchbox-marketplace"},
    {text: "In Progress", href: "/case-studies#in-progress"},
]
const designUrls = [
    {text: "Hotel Booking", href: "/designs#hotel-booking"},
    {text: "Book Box", href: "/designs#book-box"},
    {text: "Mobile Email", href: "/designs#mobile-email"},
]
const contactUrls = [
    {text: "kendra@email.com", href: "mailto:kendra@email.com"},
    {text: "LinkedIn", href: "https://www.linkedin.com/in/kendrauxd"}
]

export default function NavBar() {
    const router = useRouter();
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
                    <DropDown urls={contactUrls}>
                        <Link href="/contact"><li className={(router.pathname == "/contact" ? "active" : "") + " nav-link"}>CONTACT</li></Link>
                    </DropDown>
                </ul>
                {/* <div className="fixed right-10">
                    <Link href="#"><button type="button" className="rounded-lg bg-[#835f02] px-5 py-2 hover:bg-slate-50 hover:text-[#835f02] hover:font-semibold hover:ease-in transition duration-100 focus:ring-4 hover:focus:ring-[#835f02] focus:ring-white">Contact Me</button></Link>
                </div> */}
            </div>
        </div>
    )
}