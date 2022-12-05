import Link from 'next/link';
import styles from './About.module.css';

const About = () => {
  return (
    <section className='section'>
      <div className={`container center ${styles.pattern}`}>
        <div className={styles.wrapper}>
          <h2 className='heading-2 text-center'>
            We are an international clinic with over 25 years of experience in
            treating patients
          </h2>
          <p className='text-center'>
            Clinically is a health clinic that was built by Charles Xavier in
            1993. This clinic was originally only operating in Pasadena,
            California. And now Clinically has over 25,000 branches around the
            world.
          </p>
          <Link href='/about' className='btn-transparent'>
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About