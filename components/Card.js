import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({ pokemon }) {
  return (
    <div>
      <Image
        src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pokemon.idImagem}.png`}
        width="120"
        height="120"
        alt={pokemon.name}
      />
      <h3>{pokemon.name}</h3>
      <p>id:{pokemon.id}</p>
      <Link href={`/pokemon/${pokemon.id}`}>Detalhes</Link>
    </div>
  );
}
