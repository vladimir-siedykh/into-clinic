import styles from './Footer.module.css'
import Cta from '../CTA/Cta'
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <section className='section bg'>
      <Cta />
      <div className='container center'>
        <div className={styles.wrapper}>
          <div className={styles.contacts}>
            <div className={styles.logo}>
              <Link href='/'>
                <Image
                  src='/images/logo.svg'
                  alt='logo'
                  width={46}
                  height={46}
                  priority={true}
                />
              </Link>
              <span>Harmony Health Clinic</span>
            </div>
            <div className={styles.blockContacts}>
              <a href='tel:+19009009090'>+19009009090</a>
              <a href='mailto:info@familyhealth.com'>info@familyhealth.com</a>
            </div>
          </div>

          <nav className={styles.nav}>
            <ul className={styles.list}>
              <h4 className={styles.listTitle}>Menu</h4>
              <li>
                <Link href='/about'>About Us</Link>
              </li>
              <li>
                <Link href='/location'>Location</Link>
              </li>
              <li>
                <Link href='/'>News</Link>
              </li>
            </ul>

            <ul className={styles.list}>
              <h4 className={styles.listTitle}>Resources</h4>

              <li>
                <Link href='/'>Privacy Policy</Link>
              </li>
              <li>
                <Link href='/'>Term of Using</Link>
              </li>
            </ul>

            <ul className={styles.list}>
              <h4 className={styles.listTitle}>Follow Us</h4>
              <li>
                <a href='http://facebook.com'>Facebook</a>
              </li>
              <li>
                <a href='http://instagram.com'>Instagram</a>
              </li>
              <li>
                <Link href='/linkedin.com'>LinkedIn</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} Harmony Health Clinic
        </div>
      </div>
    </section>
  );
}

export default Footer