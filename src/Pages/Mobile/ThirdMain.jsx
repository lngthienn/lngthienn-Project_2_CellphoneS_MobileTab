import styles from '../../../Style/Layouts/Main/ThirdMain.module.scss';
import { useState, useEffect } from 'react';

function Thirdmain() {
    const [secondmain, setSecondMain] = useState(null);

    useEffect(() => {
        fetch(
            `https://raw.githubusercontent.com/lngthienn/Data_Phones/refs/heads/master/SecondMain.json?timestamp=${new Date().getTime()}`,
        )
            .then((response) => response.json())
            .then((data) => {
                setSecondMain(data);
            })
            .catch((error) =>
                console.error('Lỗi trong quá trình thực hiện', error),
            );
    }, []);

    return (
        <section className={styles.thirdmain}>
            <h1>Chọn theo nhu cầu</h1>

            <section>
                {secondmain &&
                    secondmain.map((secondmain) => (
                        <a href="#" key={secondmain.id}>
                            <span>{secondmain.title}</span>
                            <img src={secondmain.img} alt={secondmain.title} />
                        </a>
                    ))}
            </section>
        </section>
    );
}

export default Thirdmain;
