import Image from 'next/image';
import icon1 from '../../public/images/icons/about-1.svg';
import icon2 from '../../public/images/icons/about-2.svg';
import icon3 from '../../public/images/icons/about-3.svg';
import icon4 from '../../public/images/icons/about-4.svg';
import styles from './AboutCounter.module.css';

const AboutCounter = () => {
  return (
    <section className='section'>
      <div className='container center'>
        <div className={styles.counter}>
          <div className={styles.item}>
            <Image src={icon1} alt='counter' />
            <div className={styles.info}>
              <div className={styles.count}>90K+</div>
              <div className={styles.descr}>Professional Medical team</div>
            </div>
          </div>
          <div className={styles.item}>
            <Image src={icon2} alt='counter' />
            <div className={styles.info}>
              <div className={styles.count}>500k+</div>
              <div className={styles.descr}>Hi-tech Medical Tools</div>
            </div>
          </div>
          <div className={styles.item}>
            <Image src={icon3} alt='counter' />
            <div className={styles.info}>
              <div className={styles.count}>25k+</div>
              <div className={styles.descr}>Clinics in 164 Countries</div>
            </div>
          </div>
          <div className={styles.item}>
            <Image src={icon4} alt='counter' />
            <div className={styles.info}>
              <div className={styles.count}>300k+</div>
              <div className={styles.descr}>Patients served every day</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCounter;
