import TopHeader from './TopHeader';
import BottomHeader from './BottomHeader/BottomHeader';
import styles from '../../../Style/Layouts/Header/Header.module.scss';

function Header() {
    return (
        <section className={styles.header}>
            <TopHeader />
            <BottomHeader />
        </section>
    );
}

export default Header;
