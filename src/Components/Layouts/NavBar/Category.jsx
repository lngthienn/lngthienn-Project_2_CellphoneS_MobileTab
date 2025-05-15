import styles from '../../../Style/Layouts/NavBar/Category.module.scss';

function Category() {
    return (
        <section className={styles.category}>
            <i className="ti-menu" style={{ fontSize: '20px' }}></i>
            <p> Danh mục </p>
        </section>
    );
}

export default Category;
