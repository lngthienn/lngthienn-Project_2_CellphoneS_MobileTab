import { clsx } from 'clsx';
import styles from '../../../Style/Layouts/Header/LoginForm.module.scss';

function LoginForm({ isLoginForm, setIsLoginForm, setIsOverlay }) {
    const handleClose = () => {
        setIsLoginForm(false);
        setIsOverlay(false);
    };

    return (
        isLoginForm && (
            <section className={styles.loginform}>
                <div>
                    <i className="ti-close" style={{ fontSize: '20px', cursor: 'pointer' }} onClick={handleClose}></i>
                </div>
                <div>
                    <span>Smember</span>
                    <img
                        src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:80/q:90/plain/https://cellphones.com.vn/media/wysiwyg/chibi2.png"
                        alt="Login"
                    />
                </div>
                <div>
                    <p>Vui lòng đăng nhập tài khoản để xem ưu đãi và thanh toán dễ dàng hơn.</p>
                </div>
                <div>
                    <div className={styles.btn}>
                        <p>Đăng ký</p>
                    </div>
                    <div className={clsx(styles.btn, styles.loginbtn)}>
                        <p>Đăng nhập</p>
                    </div>
                </div>
            </section>
        )
    );
}

export default LoginForm;
