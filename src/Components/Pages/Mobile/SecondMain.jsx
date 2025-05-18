import styles from '../../../Style/Pages/Mobile/SecondMain.module.scss';

import { useEffect, useState } from 'react';

function Secondmain() {
    const [imagesBrand, setImagesBrand] = useState(null);

    useEffect(() => {
        fetch(
            `https://raw.githubusercontent.com/lngthienn/Data_Phones/refs/heads/master/ImageBrand.json?timestamp=${new Date().getTime()}`,
        )
            .then((response) => response.json())
            .then((data) => {
                setImagesBrand(data);
            })
            .catch((error) => console.error('Lỗi trong quá trình thực hiện', error));
    }, []);

    return (
        <section className={styles.secondmain}>
            {imagesBrand &&
                imagesBrand.map((imageBrand) => (
                    <a href="#" key={imageBrand.id}>
                        <img src={imageBrand.imgbrand} alt={imageBrand.brand} />
                    </a>
                ))}
        </section>
    );
}

export default Secondmain;
