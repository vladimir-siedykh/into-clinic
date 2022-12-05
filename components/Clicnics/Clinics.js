import ClinicCard from './ClinicCard';
import styles from './Clinics.module.css';
import clinics from '../../constants/clinics';

const Clinics = () => {
  return (
    <section className='section'>
      <div className='container center'>
        <h2 className='heading-2'>
          Clinically at{' '}
          <span className={styles.titleClinic}>San Diego, US</span>
        </h2>
        <div className={styles.wrapper} id='clinic'>
          {clinics.map((clinic) => (
            <ClinicCard key={clinic.id} clinic={clinic} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clinics