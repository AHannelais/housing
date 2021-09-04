import { DownloadButton } from "./DownloadButton";
import styles from "./Documents.module.css";

export function Documents() {
  return (
    <ul class={styles.list}>
      <li>
        <DownloadButton source="src/assets/antoine_passeport.jpg" />
        <p>Passeport</p>
      </li>
      <li>
        <DownloadButton source="src/assets/antoine_paie_05_2021.pdf" />
        <p>Bulletin de paie Mai 2021</p>
      </li>
      <li>
        <DownloadButton source="src/assets/antoine_paie_06_2021.pdf" />
        <p>Bulletin de paie Juin 2021</p>
      </li>
      <li>
        <DownloadButton source="src/assets/antoine_paie_07_2021.pdf" />
        <p>Bulletin de paie Juillet 2021</p>
      </li>
      <li>
        <DownloadButton source="src/assets/antoine_contrat.pdf" />
        <p>Contract de travail</p>
      </li>
      <li>
        <DownloadButton source="src/assets/antoine_garant_visale.pdf" />
        <p>Certificat de garant Visale</p>
      </li>
    </ul>
  );
}
