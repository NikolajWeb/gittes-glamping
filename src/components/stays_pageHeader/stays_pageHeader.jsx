import styles from './stays_pageHeader.module.css';
import logo from '/logo.png';


const StaysInfoHeader = () =>{

  return (
     <header className={styles.header}>
      <img src={logo} className={styles.logo} alt='logo' />
      <h1>
        Vores ophold
      </h1>
    </header>
  )
};

export default StaysInfoHeader;