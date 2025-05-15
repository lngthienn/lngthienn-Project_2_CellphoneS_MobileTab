import TopFooter from './TopFooter';
import BottomFooter from './BottomFooter';

import styles from '../../../Style/Layouts/Footer/Footer.module.css';

function Footer() {
    return (
        <section className={styles.footer}>
            <TopFooter />
            footer
            <BottomFooter />
        </section>
    );
}

export default Footer;
