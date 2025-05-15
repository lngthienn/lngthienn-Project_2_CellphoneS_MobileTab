import styles from '../../../Style/Layouts/NavBar/SeeMore.module.scss';
function Seemore() {
    return (
        <section className={styles.seemore}>
            <i className="ti-more" style={{ fontSize: '20px' }}></i>
            <p> Xem thêm </p>
        </section>
    );
}

export default Seemore;
