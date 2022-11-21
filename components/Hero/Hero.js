import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={`section ${styles.section} ${styles.bg}`}>
      <div className='container center'>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h1 className={`heading-1 ${styles.title}`}>
              The Next Generation
            </h1>
            <h2 className={`heading-2 ${styles.subtitle}`}>
              Of Clinic & Family Care
            </h2>
            <p>
              Our clinic lets you visit exceptional medical providers, get
              clinically-backed wellness services, and discover the right
              medicine, all in one place.
            </p>
            <button className={styles.btnMobile} type='submit'>
              Make An Appointments
            </button>
            <div className={styles.formContainer}>
              <form className={styles.form}>
                <div className={styles.formControl}>
                  <div className={styles.formInput}>
                    <label htmlFor='service' className={styles.label}>
                      Select Service
                    </label>
                    <div className={styles.selection}>
                      <select
                        className={styles.select}
                        name='dental-care'
                        id=''
                      >
                        <option value='dental-care'>Dental Care</option>
                        <option value='analisys'>Analisys</option>
                        <option value='surgery'>Surgery</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div className={styles.formInput}>
                    <label htmlFor='service' className={styles.label}>
                      Select Location
                    </label>
                    <div className={styles.selection}>
                      <select
                        className={styles.select}
                        name='dental-care'
                        id=''
                      >
                        <option value='dental-care'>Dental Care</option>
                        <option value='analisys'>Analisys</option>
                        <option value='surgery'>Surgery</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div
                    className={`${styles.formInput} ${styles.formInputLast}`}
                  >
                    <label htmlFor='service' className={styles.label}>
                      Select Location
                    </label>
                    <div className={styles.selection}>
                      <select
                        className={styles.select}
                        name='dental-care'
                        id=''
                      >
                        <option value='dental-care'>Dental Care</option>
                        <option value='analisys'>Analisys</option>
                        <option value='surgery'>Surgery</option>
                      </select>
                    </div>
                  </div>
                </div>
                <button className={styles.btn} type='submit'>
                  Make An Appointments
                </button>
              </form>
            </div>
          </div>
          <Image
            src='/images/hero.webp'
            alt='hero'
            width={596}
            height={697}
            layout='responsive'
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
