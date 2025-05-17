import { useState, useEffect, useCallback, useMemo } from 'react';
import styles from '../../../Style/Layouts/Main/FourthMain.module.scss';

const FourthMain = () => {
    const targetDate = useMemo(() => {
        const now = new Date();
        const customTarget = new Date(now);

        customTarget.setDate(now.getDate() + 7);
        customTarget.setHours(now.getHours() + 15, 0, 0, 0);

        return customTarget.getTime();
    }, []);

    const calculateTimeLeft = useCallback(() => {
        const currentTime = Date.now();
        const difference = targetDate - currentTime;

        return difference > 0
            ? {
                  days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
                  hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
                  minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
                  seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
              }
            : { days: '00', hours: '00', minutes: '00', seconds: '00' };
    }, [targetDate]);

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [calculateTimeLeft]);

    return (
        <section className={styles.fourthmain}>
            <section>
                <div>
                    <img
                        src="https://cdn2.cellphones.com.vn/x/media/catalog/product/h/o/hot-sale-cuoi-tuan-20-03-2024.gif"
                        alt="HotSale"
                    />
                </div>
                <div>
                    <div>Kết thúc sau:</div>
                    <div className={styles.countdownContainer}>
                        <div className={styles.countdown}>{timeLeft.days}</div>
                        <span>:</span>
                        <div className={styles.countdown}>{timeLeft.hours}</div>
                        <span>:</span>
                        <div className={styles.countdown}>{timeLeft.minutes}</div>
                        <span>:</span>
                        <div className={styles.countdown}>{timeLeft.seconds}</div>
                    </div>
                </div>
            </section>
            <section></section>
        </section>
    );
};

export default FourthMain;
