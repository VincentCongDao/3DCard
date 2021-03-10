import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <h2>
          Create by{" "}
          <a href="https://github.com/vincentcongdao">VincentCongDao</a>{" "}
        </h2>
      </footer>
    </>
  );
}
