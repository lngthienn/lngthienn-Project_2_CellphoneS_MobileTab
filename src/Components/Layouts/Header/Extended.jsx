import styles from '../../../Style/Layouts/Header/Extended.module.scss';
import { Link } from 'react-router-dom';

function Extended() {
    return (
        <section className={styles.extended}>
            <ul>
                <i className="ti-home" style={{ fontSize: '12px', color: 'red' }}></i>
                <li>
                    <Link to="/">Trang chủ</Link>
                </li>
                <li>{`>`}</li>
                <li>
                    <a href="">Điện thoại</a>
                </li>
            </ul>
        </section>
    );
}

export default Extended;
