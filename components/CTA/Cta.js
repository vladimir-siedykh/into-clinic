import styles from './Cta.module.css'

const Cta = () => {
  return (
    <section className='section'>
      <div className='container center'>
        <div className={styles.wrapper}>
          <h2 className='heading-2 text-center'>
            We care whenever you need it
          </h2>
          <div className={styles.buttons}>
            <button className='btn-blue'>Make an Appointment</button>
            <button className='btn-transparent'>Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta