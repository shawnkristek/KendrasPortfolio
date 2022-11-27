import Link from 'next/link';

export default function Footer(){
    return (
        <div className="w-full text-sm mt-auto px-5 pt-10 pb-2">
            <div className="gold text-center lg:text-left">
                built by&nbsp;
                <Link href="https://shawnkristek.com" className="hover:text-gray-300 underline hover:transition hover:duration-500">Shawn Kristek</Link>
            </div>
        </div>
    );
}