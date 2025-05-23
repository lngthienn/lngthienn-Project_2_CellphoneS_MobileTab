import Header from './Header/Header';
import Footer from './Footer/Footer';
import Nav from './NavBar/NavbarResponsive';
import styles from '../../Style/Layouts/Layouts.module.scss';

const Layout = ({ children }) => {
    return (
        <section>
            <Header />
            {children}
            <Footer />
            <Nav />
        </section>
    );
};

export default Layout;
