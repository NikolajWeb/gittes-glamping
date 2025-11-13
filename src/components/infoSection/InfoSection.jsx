import Button from "../button/Button";
import styles from "./infoSection.module.css";
import { useNavigate } from "react-router";

const InfoSection = ({ title, description, includes, button, img, detailPage, price }) => {
  const navigate = useNavigate();

  return (
    <section className={styles.infoSection}>
      <h2>{title}</h2>
      <p>{description}</p>

      {Array.isArray(includes) && includes.length > 0 && (
        <div className={styles.includes}>
          <ul>
            {includes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {price && <p className={styles.price}>Pris {price},-</p>}

      {img && <img src={img} alt="ophold billede" />}

      {button && (
        <Button
          buttonText={detailPage ? "Book nu" : "Se vores ophold"}
          onClick={() => navigate("/stays")}
        />
      )}
    </section>
  );
};

export default InfoSection;
