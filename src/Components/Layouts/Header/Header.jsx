import TopHeader from './TopHeader';
import BottomHeader from './BottomHeader/BottomHeader';
import Extended from './Extended';
import { useLocation } from 'react-router-dom';
import styles from '../../../Style/Layouts/Header/Header.module.scss';

function Header() {
    const location = useLocation();
    const showExtendedHeader = location.pathname.includes('/mobile');

    return (
        <section className={styles.header}>
            <TopHeader />
            <BottomHeader />
            {showExtendedHeader && <Extended />}
        </section>
    );
}

export default Header;
