import { ReactNode } from 'react';

import NavBar from '../components/navbar';
import Footer from '../components/footer';

type Props = {
    children: ReactNode,
    meta: ReactNode
};

export default function Main({ children, meta, ...props }: Props) {
    return (
        <div className="antialiased min-h-screen w-full flex flex-col justify-center md:text-xl px-5 pb-3">
            <NavBar />
            {meta}
            <div className="mx-auto my-auto">
                {children}
            </div>
            <Footer />
        </div>
    );
}