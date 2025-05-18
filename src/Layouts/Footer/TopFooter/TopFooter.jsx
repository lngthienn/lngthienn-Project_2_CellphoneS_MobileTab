import styles from '../../../../Style/Layouts/Footer/TopFooter/TopFooter.module.scss';
import Column1 from './Column1.jsx';
import Column2 from './Column2.jsx';
import Column3 from './Column3.jsx';
import Column4 from './Column4.jsx';

function Topfooter() {
    return (
        <section className={styles.topfooter}>
            <div>
                <Column1 />
                <Column2 />
                <Column3 />
                <Column4 />
            </div>
        </section>
    );
}

export default Topfooter;
