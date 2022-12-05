/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import styles from './AboutReview.module.css'
import image from '../../public/images/about-review.webp';
import arrow from '../../public/images/icons/arrow-right.svg'

const AboutReview = () => {
  return (
    <section className='section' style={{ paddingInline: '0' }}>
      <div className='container center' style={{ maxWidth: '144rem', overflow: 'hidden' }}>
        <h2 className='heading-2 text-center'>
          We're featured on a world-class mass media
        </h2>
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <Image className={styles.img} src={image} alt='review photo'/>
            <div className={styles.card}>
              <div className={styles.logo}>BBC</div>
              <h5 className={styles.cardTitle}>
                Clinically - The disruptive and modern healthcare service in
                this year
              </h5>
              <div className={styles.info}>
                <div className={styles.date}>
                  <div>8 January 2022</div>
                  <div>2,457 Reads</div>
                </div>
                <Image src={arrow} alt='arrow right' />
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <Image className={styles.img} src={image} alt='review photo' />
            <div className={styles.card}>
              <div className={styles.logo}>BBC</div>
              <h5 className={styles.cardTitle}>
                Clinically - The disruptive and modern healthcare service in
                this year
              </h5>
              <div className={styles.info}>
                <div className={styles.date}>
                  <div>8 January 2022</div>
                  <div>2,457 Reads</div>
                </div>
                <Image src={arrow} alt='arrow right' />
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <Image className={styles.img} src={image} alt='review photo' />
            <div className={styles.card}>
              <div className={styles.logo}>BBC</div>
              <h5 className={styles.cardTitle}>
                Clinically - The disruptive and modern healthcare service in
                this year
              </h5>
              <div className={styles.info}>
                <div className={styles.date}>
                  <div>8 January 2022</div>
                  <div>2,457 Reads</div>
                </div>
                <Image src={arrow} alt='arrow right' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutReview