import Layout from '../components/Layout/Layout'
import '../styles/globals.css'
// import { Montserrat } from '@next/font/google'

// const montserrat = Montserrat({
//   subsets: ['latin'],
//   weights: [400, 500, 600, 700],
// })

// const poppins = Poppins({
//   subsets: ['latin'],
//   variable: '--poppins-font',
// });

// const inter = Inter({
//   subsets: ['latin'],
//   variable: '--inter-font',
// });

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <style jsx global>{`
        :root {
          --montserrat-font: ${montserrat.style.fontFamily};
        }
        body {
          font-family: var(--montserrat-font);
        }
      `}</style> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp
