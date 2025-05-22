import styles from '../../../Style/Pages/ItemDetail/Compare.module.scss';

function Compare({ data }) {
    return (
        data && (
            <section className={styles.compare}>
                <h1>{`${data.name} ${data.storage_options[0].storage1}`}</h1>
                <div>
                    <i className="ti-star"></i>
                    <i className="ti-star"></i>
                    <i className="ti-star"></i>
                    <i className="ti-star"></i>
                    <i className="ti-star"></i>
                    <p>{Math.round(Math.random() * 1000)} đánh giá</p>
                </div>
                <button>+ So sánh</button>
            </section>
        )
    );
}

export default Compare;
