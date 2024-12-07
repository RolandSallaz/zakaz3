import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Main />
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
