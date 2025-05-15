import styles from '../../../../Style/Layouts/Footer/BottomFooter/BottomFooter.module.scss';
import Row1 from './Row1';
import Row2 from './Row2';

function Bottomfooter() {
    return (
        <section className={styles.bottomfooter}>
            <div>
                <Row1 />
                <Row2 />
            </div>
        </section>
    );
}

export default Bottomfooter;
