import { Link } from 'react-router-dom';
import styles from '../../../Style/Pages/Home/Home.module.scss';

function Home() {
    return (
        <Link to="/mobile" className={styles.home}>
            hehe
        </Link>
    );
}
export default Home;
