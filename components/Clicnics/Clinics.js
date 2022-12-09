import ClinicCard from './ClinicCard';
import styles from './Clinics.module.css';
import clinics from '../../constants/clinics';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper';

const Clinics = () => {
  
  return (
    <section className='section'>
      <div className='container center'>
        <h2 className='heading-2'>
          Harmony Health Clinic{' '}
          <span className={styles.titleClinic}>San Diego, US</span>
        </h2>
        <>
          <Swiper
            className={`mySwiper ${styles.wrapper}`}
            slidesPerView={2}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
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
            {clinics.map((clinic) => (
              <SwiperSlide key={clinic.id}>
                <ClinicCard clinic={clinic} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </section>
  );
};

export default Clinics;