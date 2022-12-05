import team from '../../constants/team';
import styles from './Team.module.css';
import TeamCard from './TeamCard';

const Team = () => {
  return (
    <section className='section bg'>
      <div className='container center'>
        <h2 className='heading-2'>
          Our team at <span className={styles.titleTeam}>San Diego, US</span>
        </h2>
        <div className={styles.wrapper}>
          {team.map((card, index) => (
            <TeamCard key={index} {...card}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
