import Logo from './Logo.jsx';
import Category from './Category.jsx';
import Checkprice from './Checkprice.jsx';
import Search from './Search.jsx';
import Calltoorder from './CallToOrder.jsx';
import Nearstore from './Nearstore.jsx';
import Checkstatusorder from './Checkstatusorder.jsx';
import Shoppingcart from './ShoppingCart.jsx';
import Signin from './SignIn.jsx';

import styles from '../../../../Style/Layouts/Header/BottomHeader/BottomHeader.module.scss';

function BottomHeader() {
    return (
        <nav className={styles.bottomHeader}>
            <section>
                <Logo />
                <Category />
                <Checkprice />
                <Search />
                <Calltoorder />
                <Nearstore />
                <Checkstatusorder />
                <Shoppingcart />
                <Signin />
            </section>
        </nav>
    );
}

export default BottomHeader;
