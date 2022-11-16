import Link from 'next/link';

// const links = [
//     "home",
//     "case studies",
//     "ui/visual designs",
//     "resume",
// ]

export default function NavBar() {
    // const navlinks = links.map( (link) => {
    //     return (
            
    //     );
    // });
    return (
        <div className="flex justify-center py-2">
            <div className="navbar">
                <ul className="flex flex-row text-center text-lg">
                    <Link href="#"><li className="selected">HOME</li></Link>
                    <Link href="#"><li className="">CASE STUDIES</li></Link>
                    <Link href="#"><li className="">UI/VISUAL DESIGNS</li></Link>
                    <Link href="#"><li className="">RESUME</li></Link>
                </ul>
            </div>
        </div>
    )
}