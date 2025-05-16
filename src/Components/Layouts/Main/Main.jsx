import styles from '../../../Style/Layouts/Main/Main.module.scss';
import ScrollToTopButton from './ScrollToTopButton';
import Firstmain from './FirstMain';

function Main() {
    return (
        <section className={styles.main}>
            <Firstmain />
            <ScrollToTopButton />
        </section>
    );
}

export default Main;
