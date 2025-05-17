import styles from '../../../../Style/Layouts/Header/BottomHeader/Login.module.scss';
import Overlay from '../../../../Style/GlobalStyles/Overlay';
import LoginForm from '../LoginForm';
import { useState } from 'react';

function Login() {
    const [isClicked, setIsClicked] = useState(false);
    const [isOverlay, setIsOverlay] = useState(false);

    const handleClick = () => {
        setIsClicked((prev) => !prev);
        setIsOverlay((prev) => !prev);
    };

    return (
        <>
            <section className={styles.login} onClick={handleClick}>
                <i className="ti-stamp" style={{ fontSize: '22px' }}></i>
                <p> Đăng nhập </p>
            </section>
            <Overlay isOverlay={isOverlay} />
            <LoginForm isLoginForm={isClicked} setIsLoginForm={setIsClicked} setIsOverlay={setIsOverlay} />
        </>
    );
}

export default Login;
