import styles from "./Article.module.css";
import profile from "./assets/profil.jpg";

export function Article() {
  const onClickVisale = () => {
    window.open(
      "https://www.visale.fr/",
      "_blank" // <- This is what makes it open in a new window.
    );
  };
  return (
    <article class={styles.article}>
      <img src={profile} class={styles.image} />
      <section>
        <p>
          Je suis un jeune développeur web de 24 ans travaillant sur Paris
          depuis bientôt 2 ans.
        </p>
        <p>
          Je viens de changer d'entreprise dans laquelle j'ai signé un CDI, et
          celle-ci se situe près du pont de Saint-Cloud.
        </p>
      </section>
      <section>
        <p>
          Mon logement actuel se situe à une grande distance de mon lieu de
          travail.
        </p>
        <p>
          C'est pour cette raison que je cherche une location ou collocation qui
          m'en rapprocherait
        </p>
      </section>
      <section>
        <p>
          Vous trouverez ici tous les documents nécessaires à mon dossier de
          candidature ainsi que mes coordonnées.
        </p>
        <p>
          J'y ai ajouté les premières pages de mon nouveau contrat pour prouver
          qu'il s'agit d'un CDI ainsi que corriger mes revenus avec mon nouveau
          salaire
        </p>
        <p>
          J'ai souscrit à un certificat{" "}
          <span onClick={onClickVisale}>Visale</span> pour me servir de garant
          dans le cas où mes revenus ne suffiraient pas
        </p>
      </section>
      <section>
        <p>
          En l'attente d'une réponse de votre part, je vous souhaite une bonne
          journée.
        </p>
        <p>Antoine</p>
      </section>
    </article>
  );
}
