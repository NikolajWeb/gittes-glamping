import styles from './pagefooter.module.css'
import imageFacebook from '../../assets/square-facebook.svg'
import imageInstagram from '../../assets/square-instagram.svg'
import imageLogo from '/public/logo.png'

const PageFooter = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.SoMe}>
                <img src={imageFacebook} alt="" />
                <img src={imageInstagram} alt="" />
            </div>
            <div className={styles.gittes}>
                <img src={imageLogo} alt="" />
                <p>Gittes    Glamping</p>
            </div>
        </footer>
    );
};

export default PageFooter;
