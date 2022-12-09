import NewsAll from '../../components/News/NewsAll';

const HealthNewsPage = () => {
  return (
    <div style={{ marginBottom: '20rem' }}>
      <section className='section bg'>
        <div className='container center'>
          <h1 className='heading-2'>Harmony Health Clinic News</h1>
          <p style={{ marginTop: '0.8rem' }}>Our last updates</p>
        </div>
      </section>
      <NewsAll />
    </div>
  );
};

export default HealthNewsPage;
