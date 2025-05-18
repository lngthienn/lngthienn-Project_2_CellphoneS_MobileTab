import styles from '../../../Style/Common/Overlay/Overlay.module.scss';

function Overlay({ isOverlay }) {
    return isOverlay && <section className={styles.overlay}></section>;
}

export default Overlay;
