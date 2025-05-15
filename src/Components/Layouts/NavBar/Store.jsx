import styles from '../../../Style/Layouts/NavBar/Store.module.scss';

function Store() {
    return (
        <section className={styles.store}>
            <i className="ti-home" style={{ fontSize: '20px' }}></i>
            <p> Cửa hàng </p>
        </section>
    );
}

export default Store;
