import styles from './pageHeader.module.css'
import logo from '/public/logo.png'

const Pageheader = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Gittes Glamping Logo" className={styles.logo} />
            <h1>Gittes <br /> Glamping</h1>
        </header>
    );
};

export default Pageheader;