import Link from 'next/link';
import styles from './Location.module.css'

const Location = () => {
  return (
    <section className='section'>
      <div className='container center'>
        <h1>Find Clinic Family Health</h1>
        <form className={styles.form}>
          <div className={styles.formControl}>
            <div className={styles.formInput}>
              <label htmlFor='service' className={styles.label}>
                Select Service
              </label>
              <div className={styles.selection}>
                <select className={styles.select} name='dental-care' id=''>
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
                <select className={styles.select} name='dental-care' id=''>
                  <option value='dental-care'>Dental Care</option>
                  <option value='analisys'>Analisys</option>
                  <option value='surgery'>Surgery</option>
                </select>
              </div>
            </div>
          </div>
          <div className={styles.formControl}>
            <div className={`${styles.formInput} ${styles.formInputLast}`}>
              <label htmlFor='service' className={styles.label}>
                Select Location
              </label>
              <div className={styles.selection}>
                <select className={styles.select} name='dental-care' id=''>
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
    </section>
  );
}

export default Location