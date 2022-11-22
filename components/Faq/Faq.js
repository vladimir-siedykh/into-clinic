import Image from 'next/image';
import styles from './Faq.module.css';

const Faq = () => {
  return (
    <section className='section bg'>
      <div className='container center'>
        <h2 className='heading-2 text-center'>How to make an appointment?</h2>
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <Image
              src='/images/icons/faq-1.svg'
              alt='find clicic'
              width={56}
              height={56}
            />
            <h3 className={`heading-3 ${styles.title}`}>Find Clinic</h3>
            <p className={styles.text}>
              Search for the clinic according to the closest location by
              entering the location menu
            </p>
          </div>
          <div className={styles.card}>
            <Image
              src='/images/icons/faq-2.svg'
              alt='find clicic'
              width={56}
              height={56}
            />
            <h3 className={`heading-3 ${styles.title}`}>Make an Appointment</h3>
            <p className={styles.text}>
              Fill in the form provided in full so that we can provide maximum
              service
            </p>
          </div>
          <div className={styles.card}>
            <Image
              src='/images/icons/faq-1.svg'
              alt='find clicic'
              width={56}
              height={56}
            />
            <h3 className={`heading-3 ${styles.title}`}>Get the Schedule</h3>
            <p className={styles.text}>
              get schedules and queues easily and quickly, without waiting for
              anything
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq