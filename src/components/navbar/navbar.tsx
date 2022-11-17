import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
    const router = useRouter();
    return (
        <div className="w-full flex justify-center py-5">
            <div className="navbar w-full flex flex-wrap items-center justify-center mx-auto">
                <ul className="md:flex-row text-center text-lg hidden md:flex">
                    <Link href="/"><li className={router.pathname == "/" ? "active" : ""}>HOME</li></Link>
                    <Link href="/case-studies"><li className={router.pathname == "/case-studies" ? "active" : ""}>CASE STUDIES</li></Link>
                    <Link href="/designs"><li className={router.pathname == "/designs" ? "active" : ""}>UI/VISUAL DESIGNS</li></Link>
                    <Link href="/resume"><li className={router.pathname == "/resume" ? "active" : ""}>RESUME</li></Link>
                    <Link href="/contact"><li className={router.pathname == "/contact" ? "active" : ""}>CONTACT</li></Link>
                </ul>
                {/* <div className="fixed right-10">
                    <Link href="#"><button type="button" className="rounded-lg bg-[#835f02] px-5 py-2 hover:bg-slate-50 hover:text-[#835f02] hover:font-semibold hover:ease-in transition duration-100 focus:ring-4 hover:focus:ring-[#835f02] focus:ring-white">Contact Me</button></Link>
                </div> */}
            </div>
        </div>
    )
}