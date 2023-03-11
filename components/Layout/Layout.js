import { NextSeo } from 'next-seo';
import Footer from '../Footer/Footer';
import Header from '../Header/Header.js';

export default function Layout({ children }) {
  return (
    <>
      <NextSeo
        title='Harmony Clinic'
        description='Our clinic lets you visit exceptional medical providers, get
              clinically-backed wellness services, and discover the right
              medicine, all in one place.'
        canonical='https://www.harmonyclinic.online'
        openGraph={{
          url: 'https://www.harmonyclinic.online',
          title: 'Harmony Clinic',
          description: 'Our clinic lets you visit exceptional medical providers, get',
        }}
      />
      <>
        <Header />
        <main className=''>{children}</main>
        <Footer />
      </>
    </>
  );
}
