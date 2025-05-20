import { Link } from 'react-router-dom';
import styles from '../../../Style/Pages/Home/Home.module.scss';

function Home() {
    return (
        <div className={styles.home}>
            <Link to="/mobile">Nhấn vào đây để tới trang Mobile</Link>
        </div>
    );
}
export default Home;
