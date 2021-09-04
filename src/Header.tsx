import styles from "./Header.module.css";

export function Header() {
  return (
    <header class={styles.header}>
      <h1 class={styles.title}>Bonjour à vous</h1>
      <div class={styles.contacts}>
        <p class={styles.p}>
          <img src="src/assets/smartphone.svg" class={styles.icon} />{" "}
          <span>+33633772962</span>
        </p>
        <p class={styles.p}>
          <img src="src/assets/email.svg" class={styles.icon} />{" "}
          <span>antoine.hannelais@gmail.com</span>
        </p>
      </div>
    </header>
  );
}
