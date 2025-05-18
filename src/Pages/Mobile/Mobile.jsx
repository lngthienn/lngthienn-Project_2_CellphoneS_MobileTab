import styles from '../../Style/Pages/Mobile.module.scss';
import ScrollToTopButton from './ScrollToTopButton';
import FirstMain from './FirstMain';
import SecondMain from './SecondMain';
import ThirdMain from './ThirdMain';
import FourthMain from './FourthMain';
function Mobile() {
    return (
        <section className={styles.mobile}>
            <section>
                <FirstMain />
                <SecondMain />
                <ThirdMain />
                <FourthMain />
                <ScrollToTopButton />
            </section>
        </section>
    );
}
export default Mobile;
