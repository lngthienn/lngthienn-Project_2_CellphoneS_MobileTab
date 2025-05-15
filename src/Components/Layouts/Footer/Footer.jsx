import TopFooter from '../Footer/TopFooter/TopFooter';
import BottomFooter from '../Footer/BottomFooter/BottomFooter.jsx';
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
