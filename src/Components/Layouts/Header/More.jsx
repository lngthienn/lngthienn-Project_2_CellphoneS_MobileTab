import styles from '../../../Style/Layouts/Header/More.module.scss';

function More() {
    return (
        <section className={styles.more}>
            <ul>
                <i
                    className="ti-home"
                    style={{ fontSize: '12px', color: 'red' }}
                ></i>
                <li>
                    <a href="">Trang chủ</a>
                </li>
                <li>{`>`}</li>
                <li>
                    <a href="">Điện thoại</a>
                </li>
            </ul>
        </section>
    );
}

export default More;
