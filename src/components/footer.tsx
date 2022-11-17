import Link from 'next/link';

export default function Footer(){
    return (
        <div className="w-full text-sm mt-auto px-5">
            <div className="gold text-center md:text-left">
                built by&nbsp;
                <Link href="https://shawnkristek.com" className="hover:text-gray-300 hover:underline hover:transition hover:duration-500">Shawn Kristek</Link>
            </div>
        </div>
    );
}