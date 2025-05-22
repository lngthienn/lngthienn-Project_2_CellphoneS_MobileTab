import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import styles from '../../../Style/Common/ScrollToTopButton/ScrollToTopButton.module.scss';

function Scrolltotopbutton() {
    const [scrolltotop, setScrolltotop] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolltotop(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    return (
        <section className={styles.scrolltotopbutton}>
            {scrolltotop && (
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <i className="ti-angle-up" style={{ fontSize: '13px', fontWeight: '700' }}></i>
                    <p>Lên đầu</p>
                </button>
            )}
        </section>
    );
}

export default Scrolltotopbutton;
