import NavMenu from '../components/navmenu';
import Footer from '../components/footer';

export default function Main({ children, meta, ...props }) {
    return (
        <div className="antialiased min-h-screen w-full flex flex-col justify-center lg:text-xl px-5 pb-3">
            <NavMenu />
            {meta}
            <div className="mx-auto my-auto mt-5">
                {children}
            </div>
            <Footer />
        </div>
    );
}