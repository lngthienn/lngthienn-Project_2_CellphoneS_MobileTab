import Header from '../Components/Layouts/Header/Header';
import Footer from '../Components/Layouts/Footer/Footer';
import Nav from '../Components/Layouts/NavBar/NavbarResponsive';
import styles from '../Style/Layouts/App.module.scss';

const Layout = ({ children }) => {
    return (
        <section className={styles.container}>
            <Header />
            {children}
            <Footer />
            <Nav />
        </section>
    );
};

export default Layout;
