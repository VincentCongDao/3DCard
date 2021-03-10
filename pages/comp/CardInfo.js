import styles from "../../styles/Card.module.css";
export default function CardInfo() {
  return (
    <div className={styles.CardInfoContainer}>
      <div className={styles.MediumText}>Yakuza Like A Dragon</div>
      <div className={styles.Space}>
        <div className={styles.SmallText}>Windows</div>
        <div className={styles.SmallText}>Xbox One || Xbox Series X & S</div>
        <div className={styles.SmallText}>PS4 || PS5</div>
      </div>
      <div className={styles.BuyLink}>
        <a href="https://www.amazon.com/Yakuza-Like-Dragon-Day-Ichi-PlayStation/dp/B0883VX67Y">
          Amazon
        </a>
      </div>
    </div>
  );
}
