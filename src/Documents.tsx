import { DownloadButton } from "./DownloadButton";
import styles from "./Documents.module.css";
import passeport from "./assets/antoine_passeport.jpg";
import paie_mai from "./assets/antoine_paie_05_2021.pdf?url";
import paie_juin from "./assets/antoine_paie_06_2021.pdf?url";
import paie_juillet from "./assets/antoine_paie_07_2021.pdf?url";
import contrat from "./assets/antoine_contrat.pdf?url";
import visale from "./assets/antoine_garant_visale.pdf?url";
import impots from "./assets/antoine_impot_2021.pdf?url";

export function Documents() {
  return (
    <ul class={styles.list}>
      <li>
        <DownloadButton source={passeport} />
        <p>Passeport</p>
      </li>
      <li>
        <DownloadButton source={paie_mai} />
        <p>Bulletin de paie Mai 2021</p>
      </li>
      <li>
        <DownloadButton source={paie_juin} />
        <p>Bulletin de paie Juin 2021</p>
      </li>
      <li>
        <DownloadButton source={paie_juillet} />
        <p>Bulletin de paie Juillet 2021</p>
      </li>
      <li>
        <DownloadButton source={impots} />
        <p>Fiche d'imposition 2021</p>
      </li>
      <li>
        <DownloadButton source={contrat} />
        <p>Contract de travail</p>
      </li>
      <li>
        <DownloadButton source={visale} />
        <p>Certificat de garant Visale</p>
      </li>
    </ul>
  );
}
