import Head from 'next/head';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import styles from '../styles/404.module.css';

const Page404 = () => {
  // const router = useRouter();

  return (
    <>
      <Head>
        <title>Restofood - Page Not Found</title>
      </Head>
      <section className={`section ${styles.bg}`}>
        <div className='container center'>
          <div className={styles.wrapper}>
            <h1 className='heading-2 text-center'>Page Not Found</h1>
            <Link className='btn-blue' href='/'>
              Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page404;
