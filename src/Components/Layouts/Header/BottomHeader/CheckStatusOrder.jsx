import styles from '../../../../Style/Layouts/Header/BottomHeader/CheckStatusOrder.module.scss';

function Checkstatusorder() {
    return (
        <section className={styles.checkstatusOrder}>
            <i className="ti-truck" style={{ fontSize: '30px' }}></i>
            <p>
                Tra cứu <br /> đơn hàng
            </p>
        </section>
    );
}

export default Checkstatusorder;
