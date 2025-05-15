import styles from '../../../../Style/Layouts/Header/BottomHeader/CheckPrice.module.scss';

function Checkprice() {
    return (
        <div className={styles.checkprice}>
            <i className="ti-location-pin" style={{ fontSize: '20px' }}></i>
            <div>
                <p>
                    Xem giá tại
                    <i
                        className="ti-angle-down"
                        style={{ fontSize: '10px' }}
                    ></i>
                </p>
                <p> Hồ Chí Minh </p>
            </div>
        </div>
    );
}

export default Checkprice;
