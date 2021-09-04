import { DownloadButton } from "./DowloadButton";

export function Documents() {
  return (
    <ul>
      <li>
        <DownloadButton source="" />
        <span>Doc 1</span>
      </li>
      <li>
        <DownloadButton source="" />
        <span>Doc 2</span>
      </li>
    </ul>
  );
}
