import Image from "next/image";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="charizard"
      />
      <p>
        Lorem Ipsum é simplesmente uma simulação de texto da indústria
        tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
        quando um impressor desconhecido pegou uma bandeja de tipos e os
        embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
        sobreviveu não só a cinco séculos, como também ao salto para a
        editoração eletrônica, permanecendo essencialmente inalterado. Se
        popularizou na década de 60, quando a Letraset lançou decalques contendo
        passagens de Lorem Ipsum, e mais recentemente quando passou a ser
        integrado a softwares de editoração eletrônica como Aldus PageMaker.
      </p>
    </div>
  );
}
