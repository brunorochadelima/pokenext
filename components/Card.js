import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Card.module.css";

export default function Card({ pokemon }) {
  return (
    <Link href={`/pokemon/${pokemon.id}`}>
      <a className={styles.container_card}>
        <p>#{pokemon.id}</p>
        <Image
          src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pokemon.idImagem}.png`}
          width="120"
          height="120"
          alt={pokemon.name}
        />
        <h3 className={styles.container_card__name}>{pokemon.name}</h3>
      </a>
    </Link>
  );
}
