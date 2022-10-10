import Image from "next/image";
import styles from "../../styles/PokemonId.module.css";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  const limit = 200;

  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`);
  const response = await data.json();

  const paths = response.results.map((item, index) => {
    return {
      params: {
        pokemonId: (index + 1).toString(),
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.pokemonId;

  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const response = await data.json();

  return {
    props: { pokemon: response },
  };
}

export default function Pokemon({ pokemon }) {
  
  // fallback para carregar páginas que nõ foram renderizadas no build
  const router = useRouter();
  if (router.isFallback) {
    return <div>Carregando...</div>;
  }
  
  // ajuste 000 nos ids das imagens da api
  var numberWithZeroes = String(pokemon.id);
  var counter = numberWithZeroes.length;

  while (counter < 3) {
    numberWithZeroes = "0" + numberWithZeroes;
    counter++;
  }

  var idImagem = numberWithZeroes;
  
  return (
    <div className={styles.container_pokemonId}>
      <h1>{pokemon.name}</h1>
      <Image
        src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${idImagem}.png`}
        width="300"
        height="300"
        alt={pokemon.name}
      />

      <div className={styles.cards_info_pokemons}>
        <div className={styles.cards_info_pokemons__item}>
          <h2>Tipo</h2>
          {pokemon.types.map((item, index) => (
            <span key={index}>
              {item.type.name}
              <br />
            </span>
          ))}
        </div>
        <div className={styles.cards_info_pokemons__item}>
          <h2>Altura</h2>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div className={styles.cards_info_pokemons__item}>
          <h2>Peso</h2>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  );
}
