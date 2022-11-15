import {ReactNode} from 'react';

import NavBar from '../components/navbar';
import Footer from '../components/footer';

type Props = {
    children: ReactNode,
    meta: ReactNode
};

export default function Main({children, meta, ...props}: Props) {
    return (
        <div className="antialiased">
            {meta}
            <NavBar />
            <main className="">
                {children}
            </main>
            <Footer />
        </div>
    );
}