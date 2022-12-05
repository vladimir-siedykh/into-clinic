import styles from './Cta.module.css'

const Cta = () => {
  return (
      <div className={styles.m_t}>
        <div className='container center'>
          <div className={styles.wrapper}>
            <h2 className='heading-2 text-center' style={{color: 'white'}}>
              We care whenever you need it
            </h2>
            <div className={styles.buttons}>
              <button className='btn-blue'>Make an Appointment</button>
              <button className='btn-transparent'>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Cta