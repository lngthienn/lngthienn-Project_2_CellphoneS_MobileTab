import { useState } from 'react';
import styles from '../../../../Style/Layouts/Header/BottomHeader/Category.module.scss';
import Overlay from '../../../../Style/GlobalStyles/Overlay';

function Category() {
    const [isVisible, setIsVisible] = useState(false);
    const [isOverlay, setOverlay] = useState(false);

    const handleOpen = () => {
        setIsVisible((prev) => !prev);
        setOverlay((prev) => !prev);
    };

    return (
        <>
            <section className={styles.category} onClick={handleOpen}>
                <i className="ti-menu"></i>
                <p>Danh mục</p>
            </section>
            <Overlay isOverlay={isOverlay} />
            <section className={isVisible ? styles.visible : styles.hidden}>
                <div>
                    <div>ss</div>
                </div>
            </section>
        </>
    );
}

export default Category;
