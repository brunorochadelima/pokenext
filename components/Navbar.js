import Link from "next/link";
import styles from "/styles/Navbar.module.css";
import Image from "next/Image";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav>
        <div>
          <Link href="/">
            <a>
              <Image
                src="/images/pokemon_logo.svg"
                width="200"
                height="80"
                alt="logo pokemon"
              />
            </a>
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">Sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
