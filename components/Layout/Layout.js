import Head from 'next/head';
import Footer from '../Footer/Footer';
import Header from '../Header/Header.js';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Into-Clicnic - Internetional</title>
        <meta name='description' content='Into-Clicnic - Internetional' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <>
        <Header />
        <main className=''>{children}</main>
        <Footer />
      </>
    </>
  );
}
