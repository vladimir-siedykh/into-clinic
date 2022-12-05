import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clinics from '../../constants/clinics';
import styles from '../../styles/Location.module.css';

const LocationDetailsPage = () => {
  const { query } = useRouter();
  const { slug } = query;
  const clinic = clinics.find((x) => x.slug === slug);

  if (!clinic) {
    return (
      <section className='section'>
        <div className='container center text-center'>
          <h1 className='heading-2' style={{marginBottom: '3.2rem'}}>Clinic Not Found</h1>
          {/* <button onClick={() => router.back()}>back to home</button> */}
          <Link href='/#clinic' className='btn-blue' style={{marginInline: 'auto'}}>Choose another clinic</Link>
        </div>
      </section>
    );
  }

  return (
    <section className='section'>
      <div className='container center'>
        <h1 className='heading-2'>{clinic.title}</h1>
        <div className={styles.address}>{clinic.address}</div>
        <div>
          <div className={styles.gallery}>
            <div className={styles.galleryMain}>
              <Image
                src={clinic.imageMain}
                alt={clinic.title}
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                className={styles.imgMain}
              />
            </div>
            <div className={styles.galleryBlock}>
              <Image
                src={clinic.image_1}
                alt={clinic.title}
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                className={styles.img1}
              />
              <Image
                src={clinic.image_2}
                alt={clinic.title}
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                className={styles.img2}
              />
            </div>
          </div>
          <h2 className='heading-3' style={{ marginTop: '4.6rem' }}>
            About Clinic
          </h2>
          <div className={styles.content}>
            <p className={styles.text}>{clinic.description}</p>
            <div className={styles.schedule}>
              <div className={styles.working}>
                <ul className={styles.scheduleList}>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationDetailsPage;
