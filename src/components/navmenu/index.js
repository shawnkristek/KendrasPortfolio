import NavBar from './navbar';
import MobileNavBar from './mobileNavBar';

const NavMenu = () => {
    return (
        <div className="z-50">
            <NavBar />
            <MobileNavBar />
        </div>
    );
}

export default NavMenu;