import Image from 'next/image';
import styles from './AboutWork.module.css';
import imgWork from '../../public/images/team-work.png';

const AboutWork = () => {
  return (
    <section className='section'>
      <div className='container center'>
        <h2 className='heading-2'>We work to care human health</h2>
        <div className={styles.wrapper}>
          <Image
            className={styles.img}
            src={imgWork}
            alt='team work'
            quality={100}
            priority
          />
          <div className={styles.content}>
            <p>
              Clinically is a health clinic that was built by Charles Xavier in
              1993. This clinic was originally only operating in Pasadena,
              California. In the following years, many people felt helped by
              being Clinically. Then Founder decided to open branches in 20
              counties in America in 2003, and now Clinically has over 25,000
              branches around the world
            </p>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWork;
