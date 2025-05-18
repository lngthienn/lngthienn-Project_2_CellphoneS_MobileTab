import Header from './Header/Header';
import Footer from './Footer/Footer';
import Nav from './NavBar/NavbarResponsive';

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
