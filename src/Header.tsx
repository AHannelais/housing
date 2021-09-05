import styles from "./Header.module.css";
import phone from "./assets/smartphone.svg";
import email from "./assets/email.svg";

export function Header() {
  return (
    <header class={styles.header}>
      <h1 class={styles.title}>Bonjour à vous</h1>
      <div class={styles.contacts}>
        <p class={styles.p}>
          <i class={styles.phone} />
          <span>+33633772962</span>
        </p>
        <p class={styles.p}>
          <i class={styles.email} />
          <span>&nbspantoine.hannelais@gmail.com</span>
        </p>
      </div>
    </header>
  );
}
