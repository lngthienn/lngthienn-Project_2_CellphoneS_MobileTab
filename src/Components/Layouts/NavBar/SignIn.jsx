import styles from '../../../Style/Layouts/NavBar/SignIn.module.scss';
function Signin() {
    return (
        <section className={styles.signin}>
            <i className="ti-face-smile" style={{ fontSize: '20px' }}></i>
            <p> Đăng nhập </p>
        </section>
    );
}

export default Signin;
