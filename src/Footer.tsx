import styles from "./Footer.module.css";

export function Footer () {
  return (
    <footer class={styles.footer}>
        <p>Made with <span class={styles.heart}>♥</span> By Antoine</p>
    </footer>
  );
};
