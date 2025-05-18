import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Layouts/Header/Header';
import Footer from './Components/Layouts/Footer/Footer';
import Nav from './Components/Layouts/NavBar/NavbarResponsive';
import styles from './Style/Layouts/App.module.scss';

import Home from './Components/Pages/Home';
import Mobile from './Components/Pages/Mobile';

function App() {
    return (
        <Router>
            <section className={styles.container}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/mobile" element={<Mobile />} />
                </Routes>
                <Footer />
                <Nav />
            </section>
        </Router>
    );
}

export default App;
