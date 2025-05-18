import styles from '../../../../Style/Layouts/Header/BottomHeader/Logo.module.scss';

function Logo() {
    return (
        <div className={styles.logo}>
            <a href="#">
                <img src="../../../../img/Header/1.jpg" alt="Logo CellphoneS" />
            </a>
        </div>
    );
}

export default Logo;
