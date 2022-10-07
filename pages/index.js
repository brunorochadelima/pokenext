import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const limit = 250;

  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`);
  const response = await data.json();

  //ad pokemon index
  response.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: { pokemons: response.results },
  };
}

export default function Home({ pokemons }) {
  return (
    <div>
      <h1 className={styles.titulo}>Título</h1>
      <div className={styles.container_pokemon}>
        {pokemons.map((item, index) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
    </div>
  );
}
