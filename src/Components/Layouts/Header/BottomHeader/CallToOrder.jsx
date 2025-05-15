import styles from '../../../../Style/Layouts/Header/BottomHeader/CallToOrder.module.scss';

function Calltoorder() {
    return (
        <a href="" className={styles.calltoOrder}>
            <i className="ti-mobile" style={{ fontSize: '24px' }}></i>
            <div>
                <p> Gọi mua hàng </p>
                <p> 1800.2097</p>
            </div>
        </a>
    );
}

export default Calltoorder;
