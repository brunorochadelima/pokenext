export async function getStaticPaths() {
  const limit = 250;

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
    fallback: false,
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
  return <h2>{pokemon.name}</h2>;
}
