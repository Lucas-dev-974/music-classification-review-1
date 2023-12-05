import { createSignal, type Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";
import { Button } from "./components/ImportButton";
import { FileService } from "./services/FileService";

const App: Component = () => {
  const [importedFile, setImportedFile] = createSignal<File>();

  function onClickUploadFile() {
    const input = document.createElement("input");
    input.type = "file";

    input.onchange = async (e: Event) => {
      const target: HTMLInputElement = e.target as HTMLInputElement;
      setImportedFile(target.files![0]);
      console.log("file saved", importedFile());

      const formData = new FormData();
      formData.append("audio_file", importedFile() as File);
      FileService.upload(formData);
    };
    input.click();
  }

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <p> Classification de genre musical</p>
        <Button label="importer un fichier audio" onClick={onClickUploadFile} />
      </header>
    </div>
  );
};

export default App;
