import { useState, useEffect } from 'react';
import styles from '../../../Style/Common/ScrollToTopButton/ScrollToTopButton.module.scss';

function Scrolltotopbutton() {
    const [scrolltotop, setScrolltotop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolltotop(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className={styles.scrolltotopbutton}>
            {scrolltotop && (
                <button onClick={scrollToTop}>
                    <i className="ti-angle-up" style={{ fontSize: '13px', fontWeight: '700' }}></i>
                    <p>Lên đầu</p>
                </button>
            )}
        </section>
    );
}

export default Scrolltotopbutton;
