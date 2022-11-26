import Layout from '../components/Layout/Layout'
import '../styles/globals.css'
import {  Poppins, Inter } from '@next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--poppins-font',
  weight: '400'
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--inter-font',
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --poppins-font: ${poppins.style.fontFamily};
          --inter-font: ${inter.style.fontFamily};
        }
        /* body {
          font-family: ${inter.style.fontFamily};
        } */
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp
