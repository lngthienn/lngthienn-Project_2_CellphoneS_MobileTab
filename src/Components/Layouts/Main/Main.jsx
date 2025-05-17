import styles from '../../../Style/Layouts/Main/Main.module.scss';
import ScrollToTopButton from './ScrollToTopButton';
import FirstMain from './FirstMain';
import SecondMain from './SecondMain';
import ThirdMain from './ThirdMain';
import FourthMain from './FourthMain';

function Main() {
    return (
        <section className={styles.main}>
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

export default Main;
