import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';
// import mainImage from '../../public/images/hero-new.png';

const Hero = () => {
  return (
    <section className={`section bg ${styles.section}`}>
      <div className='container center'>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h1 className={`heading-1 ${styles.title}`}>The Next Generation</h1>
            <h2 className={`heading-2 ${styles.subtitle}`}>
              Of Clinic & Family
            </h2>
            <p className={styles.text}>
              Our clinic lets you visit exceptional medical providers, get
              clinically-backed wellness services, and discover the right
              medicine, all in one place.
            </p>
            <Link href='/booking' className={styles.btnMobile} type='submit'>
              Make An Appointments
            </Link>
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
                <Link
                  href='/booking'
                  className={`btn-blue ${styles.btn}`}
                  type='submit'
                >
                  Make An Appointments
                </Link>
              </form>
            </div>
          </div>
          <Image
            className={styles.img}
            src='/images/hero.webp'
            alt='hero'
            width={596}
            height={697}
            priority={true}
            layout='responsive'
          />
          {/* <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src={mainImage}
              alt='main image'
              fill={true}
              priority={true}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
