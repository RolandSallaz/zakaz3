import { useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import styles from "./page.module.css";
import { apiGetCards, apiGetSmallCards } from "./lib/utils/api";


async function fetchCards() {
  return await apiGetCards();
}

async function fetchSmallCards() {
  return await apiGetSmallCards();
}


export default async function Home() {
  const cards = await fetchCards();
  const smallCards = await fetchSmallCards();
  return (
    <div className={styles.page}>
      <Header />
      <Main cards={cards.data} smallCards={smallCards.data} />
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
