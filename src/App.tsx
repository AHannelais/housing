import type { Component } from "solid-js";
import { Article } from "./Article";
import { Documents } from "./Documents";
import { Footer } from "./Footer";
import { Header } from "./Header";
import styles from "./App.module.css";

const App: Component = () => {
  return (
    <>
      <Header />
      <main class={styles.main}>
        <Article />
        <Documents />
      </main>
      <Footer />
    </>
  );
};

export default App;
