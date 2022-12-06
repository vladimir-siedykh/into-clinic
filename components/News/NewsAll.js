import styles from './NewsAll.module.css';
import news from '../../constants/news';
import NewsCard from './NewsCard';
import NewsLast from './NewsLast';

const NewsAll = () => {
  return (
    <section className='section'>
      <div className='container center'>
        <div className={styles.postMain}>
          {news
            .filter((card) => card.feature === 'true')
            .map((card) => {
              return <NewsLast key={card.id} {...card} />;
            })}
        </div>
        <div className={styles.posts}>
          {news
            .filter((card) => card.feature === 'false')
            .map((item) => {
              return <NewsCard key={item.id} {...item} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default NewsAll;
