import TopFooter from './TopFooter/TopFooter.js';
import BottomFooter from './BottomFooter/BottomFooter.js';
import styles from '../../../Style/Layouts/Footer/Footer.module.scss';

function Footer() {
    return (
        <section className={styles.footer}>
            <TopFooter />
            <BottomFooter />
        </section>
    );
}

export default Footer;
