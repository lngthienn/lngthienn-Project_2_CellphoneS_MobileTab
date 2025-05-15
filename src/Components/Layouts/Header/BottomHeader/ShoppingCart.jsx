import styles from '../../../../Style/Layouts/Header/BottomHeader/ShoppingCart.module.scss';

function Shoppingcart() {
    return (
        <section className={styles.shoppingCart}>
            <i className="ti-shopping-cart" style={{ fontSize: '22px' }}></i>
            <p>
                Giỏ <br /> hàng
            </p>
        </section>
    );
}

export default Shoppingcart;
