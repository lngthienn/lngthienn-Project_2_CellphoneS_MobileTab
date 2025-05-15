import TopHeader from './TopHeader';
import BottomHeader from './BottomHeader/BottomHeader';
import header from '../../../Style/Layouts/Header/Header.module.css';

function Header() {
    return (
        <section className={header.wrapper}>
            <TopHeader />
            <BottomHeader />
        </section>
    );
}

export default Header;
