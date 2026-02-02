import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { apiGetCards, apiGetSmallCards } from "./lib/utils/api";
import { FAQ_DATA } from "./lib/utils/seo/faq";
import styles from "./page.module.css";

export default async function Home() {
  const cards = await apiGetCards();
  const smallCards = (await apiGetSmallCards()).cards;


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_DATA.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />

      <div className={styles.page}>
        <Header />
        <Main
          cards={cards}
          smallCards={smallCards}
        />
        <footer className={styles.footer}>
        </footer>
      </div>
    </>
  );
}
