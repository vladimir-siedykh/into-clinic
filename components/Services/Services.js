import styles from './Services.module.css';
import services from '../../constants/services';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <section className='section'>
      <div className='container center'>
        <div className={styles.wrapper}>
          <div className={styles.intro}>
            <h2 className='heading-2'>We provide a modern service care</h2>
            <p className={styles.text}>
              We believe in technology and our team to take care of your health
              problems. We guarantee you will get the best service that you have
              never experienced before
            </p>
          </div>
          <div className={styles.services}>
            {services.map((service) => (
              <ServiceCard key={service.id} service={service}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services