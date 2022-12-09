import Image from 'next/image';
import styles from './NewsPostDetails.module.css';
import subscrImg from '../../public/images/subscr.svg';
import Link from 'next/link';

const NewsPostDetails = ({ post }) => {

  return (
    <section className='section'>
      <div className='container center'>
        <div className={styles.wrapper}>
          <article className={styles.article}>
            <h2 className='heading-3'>Introduction</h2>
            <p>{post.subtitle}</p>
            <Image
              src={post.image}
              alt='post title'
              style={{ width: '100%', height: 'auto', borderRadius: '1.2rem' }}
            />
            <div>
              {post.article.split('\n').map((i, key) => {
                return <p style={{marginTop: '1.6rem'}} key={key}>{i}</p>;
              })}
            </div>
          </article>
          <div className={styles.subscrFrom}>
            <Image src={subscrImg} alt='' />
            <h4 style={{ marginTop: '3.2rem' }} className='heading-4'>
              Weekly newsletter
            </h4>
            <p style={{ marginTop: '0.8rem', marginBottom: '3.2rem' }}>
              No spam. Just the latest releases and tips, interesting articles,
              and exclusive interviews in your inbox every week.
            </p>
            <form className={styles.form}>
              <input
                className={styles.input}
                type='text'
                placeholder='Enter your email'
              />
            </form>
            <div className={styles.policy}>
              Read about our{' '}
              <Link href='/' className={styles.policyLink}>
                privacy policy
              </Link>
              .
            </div>
            <button
              style={{
                width: '100%',
                textAlign: 'center',
                paddingBlock: '1.2rem',
                marginTop: '1.6rem',
              }}
              className='btn-blue'
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsPostDetails;
