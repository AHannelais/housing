import styles from "./DownloadButton.module.css";
interface Props {
  source: string;
}

export function DownloadButton({ source }: Props) {
  const onClickDownload = () => {
    let link = document.createElement("a");
    link.setAttribute("type", "hidden");
    console.log(source);
    link.href = source;
    link.download = source.split("/")[2];
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <>
      <button onClick={onClickDownload} class={styles.button}>
        <i class={styles.icon} />
      </button>
    </>
  );
}
