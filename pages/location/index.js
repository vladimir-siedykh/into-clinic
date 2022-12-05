import ClinicCard from '../../components/Clicnics/ClinicCard';
import clinics from '../../constants/clinics';
import styles from '../../styles/Location.module.css'

const LacationPage = () => {
  return (
    <section className='section'>
      <div className='container center'>
        <h1 className='heading-2'>Find clinic Family Health</h1>
        <div className={styles.wrapper}>
          {clinics.map((clinic) => (
            <ClinicCard key={clinic.id} clinic={clinic} />
          ))}
        </div>
        <div>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.455574752554!2d3.379236314769235!3d6.524356995493409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8f7f0f4b0a5d%3A0x4f8b0a2b2b3b0c7!2sThe%20Ozone%20Restaurant!5e0!3m2!1sen!2sng!4v1625581000000!5m2!1sen!2sng'
            width='100%'
            height='400px'
            allowFullScreen=''
            style={{ border: 'none', borderRadius: '1.2rem' }}
            loading='lazy'
            className={styles.map}
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default LacationPage