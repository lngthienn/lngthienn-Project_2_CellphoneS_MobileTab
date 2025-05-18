import { useState } from 'react';
import LoginForm from '../LoginForm';
import styles from '../../../../Style/Layouts/Header/BottomHeader/ShoppingCart.module.scss';

function Shoppingcart() {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked((prev) => !prev);
    };

    return (
        <>
            <section className={styles.shoppingCart} onClick={handleClick}>
                <i className="ti-shopping-cart" style={{ fontSize: '22px' }}></i>
                <p>
                    Giỏ <br /> hàng
                </p>
            </section>
            <LoginForm isLoginForm={isClicked} setIsLoginForm={setIsClicked} />
        </>
    );
}

export default Shoppingcart;
