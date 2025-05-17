import { useState } from 'react';
import LoginForm from '../LoginForm';
import styles from '../../../../Style/Layouts/Header/BottomHeader/ShoppingCart.module.scss';
import Overlay from '../../../../Style/GlobalStyles/Overlay';

function Shoppingcart() {
    const [isClicked, setIsClicked] = useState(false);
    const [isOverlay, setIsOverlay] = useState(false);

    const handleClick = () => {
        setIsClicked((prev) => !prev);
        setIsOverlay((prev) => !prev);
    };

    return (
        <>
            <section className={styles.shoppingCart} onClick={handleClick}>
                <i className="ti-shopping-cart" style={{ fontSize: '22px' }}></i>
                <p>
                    Giỏ <br /> hàng
                </p>
            </section>
            <Overlay isOverlay={isOverlay} />
            {/* Truyền thêm setIsOverlay vào LoginForm */}
            <LoginForm isLoginForm={isClicked} setIsLoginForm={setIsClicked} setIsOverlay={setIsOverlay} />
        </>
    );
}

export default Shoppingcart;
