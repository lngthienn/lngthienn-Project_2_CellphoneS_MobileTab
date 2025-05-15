import styles from '../../../../Style/Layouts/Header/BottomHeader/Nearstore.module.scss';

function Nearstore() {
    return (
        <section className={styles.nearStore}>
            <i className="ti-location-pin"></i>
            <p>
                Cửa hàng <br /> gần bạn
            </p>
        </section>
    );
}

export default Nearstore;
