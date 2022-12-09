// react component with tabs for 5 tabs

// Path: components/Tabs.js
import { useState } from 'react';
import styles from './Tabs.module.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const Tabs = () => {
  const [tab, setTab] = useState(1);
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const animation = useAnimation();

  if (inView) {
    animation.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    });
  }

  if (!inView) {
    animation.start({
      opacity: 0,
      y: 100,
    });
  }

  return (

    <div className={styles.tabs} ref={ref}>
      <div className={styles.tabsContainer}>
        <div className={styles.tabsHeader}>
          <div
            className={tab === 1 ? styles.tabActive : styles.tab}

            onClick={() => setTab(1)}
          >
            <h3 className={styles.tabTitle}>Tab 1</h3>

          </div>
          <div
            className={tab === 2 ? styles.tabActive : styles.tab}

            onClick={() => setTab(2)}
          >
            <h3 className={styles.tabTitle}>Tab 2</h3>

          </div>
          <div
            className={tab === 3 ? styles.tabActive : styles.tab}

            onClick={() => setTab(3)}
          >
            <h3 className={styles.tabTitle}>Tab 3</h3>

          </div>
          <div
            className={tab === 4 ? styles.tabActive : styles.tab}

            onClick={() => setTab(4)}
          >
            <h3 className={styles.tabTitle}>Tab 4</h3>

          </div>
          <div
            className={tab === 5 ? styles.tabActive : styles.tab}

            onClick={() => setTab(5)}
          >
            <h3 className={styles.tabTitle}>Tab 5</h3>

          </div>
        </div>
        <div className={styles.tabsContent}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={animation}
            className={tab === 1 ? styles.tabActive : styles.tab}
          >
            <h3 className={styles.tabTitle}>Tab 1</h3>
            <p className={styles.tabText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quae, voluptatum, quod, voluptas quibusdam voluptates quidem

              voluptatibus, quos quia quas. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam quae, voluptatum, quod,
              voluptas quibusdam voluptates quidem voluptatibus, quos quia quas.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quae, voluptatum, quod, voluptas quibusdam voluptates quidem

              voluptatibus, quos quia quas.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={animation}
            className={tab === 2 ? styles.tabActive : styles.tab}
          >
            <h3 className={styles.tabTitle}>Tab 2</h3>
            <p className={styles.tabText}>

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quae, voluptatum, quod, voluptas quibusdam voluptates quidem

              voluptatibus, quos quia quas. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam quae, voluptatum, quod,
              voluptas quibusdam voluptates quidem voluptatibus, quos quia quas.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quae, voluptatum, quod, voluptas quibusdam voluptates quidem

              voluptatibus, quos quia quas.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={animation}
            className={tab === 3 ? styles.tabActive : styles.tab}
          >

            <h3 className={styles.tabTitle}>Tab 3</h3>
            <p className={styles.tabText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quae, voluptatum, quod, voluptas quibusdam voluptates quidem

              voluptatibus, quos quia quas. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam quae, voluptatum, quod,
              voluptas quibusdam voluptates quidem voluptatibus, quos quia quas.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quae, voluptatum, quod, voluptas quibusdam voluptates quidem

              voluptatibus, quos quia quas.
            </p>
          </motion.div>
          <motion.div

            initial={{ opacity: 0, y: 100 }}
            animate={animation}
            className={tab === 4 ? styles.tabActive : styles.tab}
          >

            <h3 className={styles.tabTitle}>Tab 4</h3>
            <p className={styles.tabText}>

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quae, voluptatum, quod, voluptas quibusdam voluptates quidem

              voluptatibus, quos quia quas. Lorem ipsum dolor sit amet

              consectetur adipisicing elit. Quisquam quae, voluptatum, quod,
              voluptas quibusdam voluptates quidem voluptatibus, quos quia quas.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quae, voluptatum, quod, voluptas quibusdam voluptates quidem

              voluptatibus, quos quia quas.
            </p>
          </motion.div>
          <motion.div

            initial={{ opacity: 0, y: 100 }}
            animate={animation}
            className={tab === 5 ? styles.tabActive : styles.tab}
          > 
            <h3 className={styles.tabTitle}>Tab 5</h3>
            <p className={styles.tabText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quae, voluptatum, quod, voluptas quibusdam voluptates quidem

              voluptatibus, quos quia quas. Lorem ipsum dolor sit amet

              consectetur adipisicing elit. Quisquam quae, voluptatum, quod,
              voluptas quibusdam voluptates quidem voluptatibus, quos quia quas.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quae, voluptatum, quod, voluptas quibusdam voluptates quidem

              voluptatibus, quos quia quas.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
