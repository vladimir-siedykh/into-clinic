import Image from 'next/image';
import Link from 'next/link';
import styles from './Features.module.css';

const Features = () => {
  return (
    <section className={`section ${styles.section}`}>
      <div className={styles.container}>
        <div className={styles.contentLeft}>
          <div className={styles.list}>
            <div className={styles.card}>
              <Image
                src='/images/icons/feature-1.svg'
                alt='feature-1'
                width={56}
                height={56}
              />
              <div className={styles.descr}>
                <h3 className='heading-3'>25+ Experience</h3>
                <p className={styles.text}>
                  Lorem ipsum dolor sit amet, ad vix fuisset assentior. Vim
                  dicit lobortis molestiae no,{' '}
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <Image
                src='/images/icons/feature-2.svg'
                alt='feature-2'
                width={56}
                height={56}
              />
              <div className={styles.descr}>
                <h3 className='heading-3'>24/7 Service Available</h3>
                <p className={styles.text}>
                  Lorem ipsum dolor sit amet, ad vix fuisset assentior. Vim
                  dicit lobortis molestiae no,{' '}
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <Image
                src='/images/icons/feature-3.svg'
                alt='feature-3'
                width={56}
                height={56}
              />
              <div className={styles.descr}>
                <h3 className='heading-3'>Fast process, best results</h3>
                <p className={styles.text}>
                  Lorem ipsum dolor sit amet, ad vix fuisset assentior. Vim
                  dicit lobortis molestiae no,{' '}
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <Image
                src='/images/icons/feature-4.svg'
                alt='feature-4'
                width={56}
                height={56}
              />
              <div className={styles.descr}>
                <h3 className='heading-3'>Professional Medical Team</h3>
                <p className={styles.text}>
                  Lorem ipsum dolor sit amet, ad vix fuisset assentior. Vim
                  dicit lobortis molestiae no,{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.contentRight} ${styles.pattern}`}>
          <div className={styles.content}>
            <h2 className='heading-2'>
              Here is what makes us different from conventional clinics
            </h2>
            <p className={styles.textContet}>
              We are brave compared to other clinics, because we believe that
              what we have is the best
            </p>
            <div className={styles.counters}>
              <div className={styles.counter}>
                <h4 className={styles.counterTitle}>3000+</h4>
                <p className={styles.counterText}>Patients served every day</p>
              </div>
              <div className={styles.counter}>
                <h4 className={styles.counterTitle}>200K</h4>
                <p className={styles.counterText}>
                  Medical Team around the world
                </p>
              </div>
            </div>
            <Link href='/booking' className={`btn-blue ${styles.btn}`}>Make an Appointment</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features