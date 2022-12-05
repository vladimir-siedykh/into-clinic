import Image from 'next/image';
import styles from './Testimonials.module.css';
import userImage from '../../public/images/testimonial.png';
import starImg from '../../public/images/icons/star.svg';

const Testimonials = () => {
  return (
    <section className={`section ${styles.section}`}>
      <div className='container center'>
        <h2 className='heading-2'>
          96% our patients satisfied with our services
        </h2>
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <Image
                className={styles.img}
                src={userImage}
                alt='customer photo'
                fill={true}
              />
            </div>
            <div className={styles.content}>
              <div className={styles.stars}>
                <Image src={starImg} alt='star' />
                <Image src={starImg} alt='star' />
                <Image src={starImg} alt='star' />
                <Image src={starImg} alt='star' />
                <Image src={starImg} alt='star' />
              </div>
              <h3 className='heading-3'>
                When your body is not going well, you must go to clinically. The
                service is definitely fast, good and clinically. I already
                recommend thin clinic to my family and friends
              </h3>
              <div className={styles.customer}>
                <div className={styles.name}>Kostas Mavropanos</div>
                <div className={styles.job}>Game Designer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
