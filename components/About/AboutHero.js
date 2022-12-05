import Image from 'next/image';
import styles from './AboutHero.module.css'
import imgHero from '../../public/images/team-main.png'

const AboutHero = () => {
  return (
    <section className={`section ${styles.bg}`}>
      <div className='container center'>
        <div className={styles.content}>
          <h1 className='heading-2'>
            Pioneering modern clinic that provides the best service
          </h1>
          <p className={styles.text}>
            We believe, when a health professional team collaborates with modern
            technology, it will provide fast, precise and accurate health
            services.
          </p>
        </div>
        <Image
          className={styles.img}
          src={imgHero}
          alt='team'
          priority={true}
        />
      </div>
    </section>
  );
}

export default AboutHero