import styles from '../../../Style/Common/Overlay/Overlay.module.scss';

function Overlay({ isOverlay, handleClose }) {
    return isOverlay && <section className={styles.overlay} onClick={handleClose}></section>;
}

export default Overlay;
