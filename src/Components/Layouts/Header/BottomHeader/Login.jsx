import styles from '../../../../Style/Layouts/Header/BottomHeader/Login.module.scss';
import LoginForm from '../../../Common/LoginForm/LoginForm';

import { useState } from 'react';

function Login() {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked((prev) => !prev);
    };

    return (
        <>
            <section className={styles.login} onClick={handleClick}>
                <i className="ti-stamp" style={{ fontSize: '22px' }}></i>
                <p> Đăng nhập </p>
            </section>
            <LoginForm isLoginForm={isClicked} setIsLoginForm={setIsClicked} />
        </>
    );
}

export default Login;
