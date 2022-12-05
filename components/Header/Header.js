import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { DeviceSize } from '../../utils/responsive';
import NavigationMobile from '../Navigation/NavigationMobile';
import NavDesktop from '../Navigation/NavDesktop';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import Image from 'next/image';

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.tablet });

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <header
      className={`${styles.header} ${styles.bg}`}
    >
      <div className='container center'>
        <div className={styles.wrapper}>
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
          </div>
          {!isMobile && <NavDesktop />}
          {isMobile && <NavigationMobile />}
        </div>
      </div>
    </header>
  );
};

export default Header;
