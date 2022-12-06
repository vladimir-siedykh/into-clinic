import NewsPostDetails from '../../components/News/NewsPostDetails';
import news from '../../constants/news';
import styles from '../../styles/News.module.css';
import Image from 'next/image';
import copy from '../../public/images/copy.svg';
import facebook from '../../public/images/facebook.svg';
import twitter from '../../public/images/twitter.svg';
import linkedin from '../../public/images/linkedin.svg';
import Link from 'next/link';

export const getStaticProps = async ({ params }) => {
  const postListList = news.filter((x) => x.slug.toString() === params.slug);
  return {
    props: {
      post: postListList[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = news.map((post) => ({
    params: { slug: post.slug.toString() },
  }));

  return { paths, fallback: false };
};

const NewsDetailPage = ({ post }) => {
  return (
    <div style={{ marginBottom: '20rem' }}>
      <section className='section bg'>
        <div className='container center'>
          <h1 className='heading-2'>{post.title}</h1>
          <Image
            src={post.imgMain}
            alt='image main post'
            style={{ width: '100%', height: 'auto', marginTop: '4.8rem' }}
          />
          <div className={styles.wrapper}>
            <div className={styles.postDetails}>
              <div className={styles.author}>
                <div>Written by</div>
                <div>Anji Sparks</div>
              </div>
              <div className={styles.date}>
                <div>Published on</div>
                <div>{post.date}</div>
              </div>
            </div>
            <div className={styles.share}>
              <Link href={`http://localhost:3000/health-news/${post.slug}`}>
                <Image src={copy} alt=''></Image>
                <span>Copy link</span>
              </Link>
              <a href='http://facebook.com'>
                <Image src={facebook} alt='' />
              </a>
              <a href='http://twitter.com'>
                <Image src={twitter} alt='' />
              </a>
              <a href='http://linkedin.com'>
                <Image src={linkedin} alt='' />
              </a>
            </div>
          </div>
        </div>
      </section>
      <NewsPostDetails post={post} />
    </div>
  );
};

export default NewsDetailPage;
