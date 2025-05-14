import Header from './Components/Layouts/Header/Header';
import Footer from './Components/Layouts/Footer/Footer';
import Main from './Components/Layouts/Main/Main';
import Nav from './Components/Layouts/NavBar/NavbarResponsive';
import app from './Style/Layouts/App.module.css';
import classNames from 'clsx';

function App() {
    return (
        <section className={classNames(app.wrapper)}>
            <Header />
            <Main />
            <Footer />
            <Nav />
        </section>
    );
}

export default App;
