import Image from 'next/image';
import styles from './TeamCard.module.css';

const TeamCard = ({ image, name, job }) => {
  return (
    <div className={styles.card}>
      <Image style={{width: '100%', height: 'auto'}} className={styles.img} src={image} alt='job' />
      <div className={styles.name}>{name}</div>
      <div className={styles.job}>{job}</div>
    </div>
  );
};

export default TeamCard;
