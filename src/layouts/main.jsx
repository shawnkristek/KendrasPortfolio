import NavMenu from 'components/navmenu';
import Footer from 'components/footer';


export default function Main({ children, meta, ...props }) {
    return (
        <div className="antialiased min-h-screen w-full flex flex-col justify-center lg:text-xl">
            <NavMenu />
            {meta}
            <div className="my-auto lg:text-xl">
                {children}
            </div>
            <Footer />
        </div>
    );
}