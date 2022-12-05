import Image from 'next/image';
import Link from 'next/link';
import styles from './ClinicCard.module.css';

const ClinicCard = ({ clinic, style }) => {
  const { image, title, address } = clinic;
  return (
    <div className={styles.card} style={style}>
        <Image src={image} alt='clinic' className={styles.img} />
      <div className={styles.content}>
        <div className={styles.contentTitle}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.adress}>{address}</p>
        </div>
        <Link href={`/location/${clinic.slug}`}>
          <div className={styles.arrow}>
            <svg
              className={styles.arrow}
              width='48'
              height='48'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M19.3653 12.56L14.3853 17.56C14.2253 17.72 14.0253 17.8 13.8253 17.8C13.6253 17.8 13.4253 17.72 13.2653 17.56C12.9453 17.24 12.9453 16.74 13.2653 16.42L16.8853 12.78H5.20527C4.76527 12.78 4.40527 12.42 4.40527 11.98C4.40527 11.54 4.76527 11.18 5.20527 11.18H16.8853L13.2653 7.54004C12.9453 7.22004 12.9453 6.72003 13.2653 6.40003C13.5853 6.08003 14.0853 6.08003 14.4053 6.40003L19.3853 11.4C19.6853 11.74 19.6853 12.26 19.3653 12.56Z'
                fill='#0F2F64'
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ClinicCard;
