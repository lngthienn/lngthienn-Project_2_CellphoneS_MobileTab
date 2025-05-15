import styles from '../../../../Style/Layouts/Header/BottomHeader/Search.module.scss';

function Search() {
    return (
        <section className={styles.search}>
            <input type="text" placeholder="Bạn cần tìm gì" />
            <i className="ti-search"></i>
        </section>
    );
}

export default Search;
