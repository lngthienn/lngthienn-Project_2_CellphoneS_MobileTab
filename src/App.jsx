import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Layouts/Header/Header';
import Footer from './Components/Layouts/Footer/Footer';
import Nav from './Components/Layouts/NavBar/NavbarResponsive';
import styles from './Style/App.module.scss';
import Home from './Components/Pages/Home/Home';
import Mobile from './Components/Pages/Mobile/Mobile';
import ItemDetail from './Components/Pages/ItemDetail/ItemDetail';
import { ProductProvider } from './Components/Pages/Mobile/ProductProvider';
import ScrollToTop from './Components/Common/ScrollToTopButton/ScrollToTopButton';

function App() {
    return (
        <ProductProvider>
            <Router>
                <ScrollToTop />
                <section className={styles.container}>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/mobile" element={<Mobile />} />
                        <Route path="/mobile/:name" element={<ItemDetail />} />
                    </Routes>
                    <Footer />
                    <Nav />
                </section>
            </Router>
        </ProductProvider>
    );
}

export default App;
