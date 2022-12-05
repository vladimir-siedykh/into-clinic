/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import styles from './AboutReview.module.css';
import image from '../../public/images/about-review.webp';
import arrow from '../../public/images/icons/arrow-right.svg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper';

const AboutReview = () => {
  return (
    <section className='section' style={{ marginBottom: '20rem' }}>
      <div className='container center'>
        <h2 className='heading-2 text-center'>
          We're featured on a world-class mass media
        </h2>
        <Swiper
          className={`mySwiper ${styles.wrapper}`}
          slidesPerView={1}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            280: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          modules={[FreeMode, Pagination]}
          style={{
            paddingBottom: '5rem',
            paddingInline: '0.3rem',
            marginTop: '5rem',
          }}
        >
          <SwiperSlide className={styles.item}>
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
          </SwiperSlide>
          <SwiperSlide className={styles.item}>
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
          </SwiperSlide>
          <SwiperSlide className={styles.item}>
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
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default AboutReview;
