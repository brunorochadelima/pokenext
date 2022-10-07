import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Card from "./components/Card";

export async function getStaticProps() {
  const limit = 250;

  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`);
  const response = await data.json();

  //ad pokemon index
  response.results.forEach((item, index) => {
    // cria id
    item.id = index + 1;

    // converte id para ter no mínimo 3 digitos
    var numberWithZeroes = String(item.id);
    var counter = numberWithZeroes.length;

    while (counter < 3) {
      numberWithZeroes = "0" + numberWithZeroes;
      counter++;
    }

    item.id = numberWithZeroes;
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
          <Card key={item.id} pokemon={item} />
        ))}
      </div>
    </div>
  );
}
