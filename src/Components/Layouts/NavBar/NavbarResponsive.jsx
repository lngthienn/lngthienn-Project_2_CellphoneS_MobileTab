import styles from '../../../Style/Layouts/NavBar/NavbarResponsive.module.scss';
import Homepage from './HomePage.jsx';
import Category from './Category.jsx';
import Store from './Store.jsx';
import Signin from './SignIn.jsx';
import Seemore from './SeeMore.jsx';

function Nav() {
    return (
        <nav className={styles.navResponsive}>
            <Homepage />
            <Category />
            <Store />
            <Signin />
            <Seemore />
        </nav>
    );
}

export default Nav;
