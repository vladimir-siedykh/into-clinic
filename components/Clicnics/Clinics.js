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
        <div className={styles.wrapper}>
          {clinics.map((card) => (
            <ClinicCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clinics