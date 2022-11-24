import NavBar from './navbar';
import MobileNavBar from './mobileNavBar';

const NavMenu = () => {
    return (
        <div>
            <NavBar className="z-50"/>
            <MobileNavBar />
        </div>
    );
}

export default NavMenu;