import Link from 'next/link';
import styles from './NavDesktop.module.css';

const NavDesktop = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About Us</Link>
        </li>
        <li>
          <Link href='/location'>Location</Link>
        </li>
        <li>
          <Link href='/health-news'>Health News</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavDesktop;
