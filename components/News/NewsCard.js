import Image from 'next/image';
import Link from 'next/link';
import styles from './NewsCard.module.css'
import arrow from '../../public/images/arrow-link.svg'

const NewsCard = (card) => {
  return (
    <div className={styles.cardMain}>
      <Image
        src={card.image}
        alt={card.title}
        style={{ width: '100%', height: 'auto' }}
      />
      <div className={styles.content}>
        <h2
          className='heading-3'
          style={{ marginTop: '1.6rem', marginBottom: '0.8rem' }}
        >
          {card.title}
        </h2>
        <p className={styles.text}>{card.subtitle}</p>
        <Link href={`/health-news/${card.slug}`} className={styles.link}>
          Read post{' '}
          <span>
            <Image src={arrow} alt='' />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard