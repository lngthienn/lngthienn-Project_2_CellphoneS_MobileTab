import styles from '../../../Style/Layouts/NavBar/HomePage.module.scss';
function Homepage() {
    return (
        <section className={styles.homePage}>
            <i className="ti-home" style={{ fontSize: '20px' }}></i>
            <p> Trang chủ </p>
        </section>
    );
}

export default Homepage;
