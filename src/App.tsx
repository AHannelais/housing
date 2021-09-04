import type { Component } from "solid-js";
import { Article } from "./Article";
import { Documents } from "./Documents";
import { Footer } from "./Footer";
import { Header } from "./Header";

const App: Component = () => {
  return (
    <>
      <Header />
      <main>
        <Article />
        <Documents />
      </main>
      <Footer />
    </>
  );
};

export default App;
