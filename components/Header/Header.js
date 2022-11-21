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
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>
            <Image 
            src='/images/logo.svg'
            alt='logo'
            width={46}
            height={46}
            />
        </Link>
      </div>
      {!isMobile && <NavDesktop />}
      {isMobile && <NavigationMobile />}
    </header>
  );
};

export default Header;
