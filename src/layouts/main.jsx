import NavMenu from 'components/navmenu';
import Footer from 'components/footer';


export default function Main({ children, meta, ...props }) {
    return (
        <div className="">
            <NavMenu />
            {meta}
            <div className="">
                {children}
            </div>
            {/* <Footer /> */}
        </div>
    );
}