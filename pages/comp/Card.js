import styles from "../../styles/Card.module.css";
import { motion, useMotionValue, useTransform } from "framer-motion";
import CardInfo from "./CardInfo";
export default function Card(props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  return (
    <div className={styles.CardWrapper}>
      <motion.div
        className={styles.CardContainer}
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        <div className={styles.TopContainer}>
          <div className={styles.CircleWrapper}>
            <div className={styles.Circle}></div>
          </div>
          <motion.div className={styles.ImageWrapper}>
            <motion.div
              className={styles.ImageDiv}
              style={{
                rotate: "-10deg",
                x,
                y,
                rotateX,
                rotateY,
                z: 10,
              }}
              drag
              dragElastic={0.12}
              whileTap={{ cursor: "grabbing" }}
            >
              <img
                className={styles.image}
                src="./Videogames/YakuzaLAD/yakuzalikeadragon.jpg"
              />
            </motion.div>
          </motion.div>
          <h1 className={styles.DetailText}>Yakuza: Like a Dragon</h1>
        </div>
        <div className={styles.BottomContainer}>
          <CardInfo />
        </div>
      </motion.div>
    </div>
  );
}
