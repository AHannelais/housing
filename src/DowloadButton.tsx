import styles from "./DownloadButton.module.css";

interface Props {
  source: string;
}

export function DownloadButton({ source }: Props) {
  const onClickDownload = () => {
    let link = document.createElement("a");
    link.setAttribute("type", "hidden");
    link.href = "assets/file";
    link.download = source;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <button onClick={onClickDownload}>
      <i class={styles.icon} />
    </button>
  );
}
