import Header from './Components/Layouts/Header/Header';
import Footer from './Components/Layouts/Footer/Footer';
import Main from './Components/Layouts/Main/Main';
import Nav from './Components/Layouts/NavBar/NavbarResponsive';
import styles from './Style/Layouts/App.module.scss';

function App() {
    return (
        <section className={styles.container}>
            <Header />
            <Main />
            <Footer />
            <Nav />
        </section>
    );
}

export default App;
