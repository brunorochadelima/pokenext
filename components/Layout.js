import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>PokeNext</title>
        <meta name="description" content="Site Pokemons feito com Next js" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <Navbar/>
      <main className="main-container">{children}</main>
      <Footer/>
    </>
  );
}
