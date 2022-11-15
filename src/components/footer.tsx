import Link from 'next/link';

export default function Footer(){
    return (
        <div className="bottom-0 fixed w-full px-10 pb-2">
            <div className="raleway text-xs gold text-left">
                created by&nbsp;
                <Link href="https://shawnkristek.com" className="hover:text-gray-300 hover:underline">Shawn Kristek</Link>
            </div>
        </div>
    );
}