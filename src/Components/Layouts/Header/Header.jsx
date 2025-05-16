import TopHeader from './TopHeader';
import BottomHeader from './BottomHeader/BottomHeader';
import More from './More';

import styles from '../../../Style/Layouts/Header/Header.module.scss';

function Header() {
    return (
        <section className={styles.header}>
            <TopHeader />
            <BottomHeader />
            <More />
        </section>
    );
}

export default Header;
