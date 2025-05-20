import styles from '../../../Style//Pages/Mobile/Mobile.module.scss';
import ScrollToTopButton from '../../Common/ScrollToTopButton/ScrollToTopButton';
import FirstMain from './FirstMain';
import SecondMain from './SecondMain';
import ThirdMain from './ThirdMain';
import FourthMain from './FourthMain';
import FifthMain from './FifthMain';
import SixthMain from './SixthMain';
import SeventhMain from './SeventhMain';

function Mobile() {
    return (
        <section className={styles.mobile}>
            <section>
                <FirstMain />
                <SecondMain />
                <ThirdMain />
                <FourthMain />
                <FifthMain />
                <SixthMain />
                <SeventhMain />
                <ScrollToTopButton />
            </section>
        </section>
    );
}
export default Mobile;
