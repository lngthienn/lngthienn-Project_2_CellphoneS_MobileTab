import styles from '../../../../Style/Layouts/Header/BottomHeader/SignIn.module.scss';

function Signin() {
    return (
        <section className={styles.signIn}>
            <i className="ti-stamp" style={{ fontSize: '22px' }}></i>
            <p> Đăng nhập </p>
        </section>
    );
}

export default Signin;
