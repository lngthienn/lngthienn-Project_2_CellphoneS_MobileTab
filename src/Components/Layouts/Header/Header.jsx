import TopHeader from './TopHeader';
import BottomHeader from './BottomHeader';
import header from '../../../Style/Layouts/Header/Header.module.css';

function Header() {
    return (
        <section className={header.wrapper}>
            <TopHeader />
            Header
            <BottomHeader />
        </section>
    );
}

export default Header;
