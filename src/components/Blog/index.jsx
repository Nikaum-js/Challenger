import CapaBlog1 from '../../assets/blog_image_1.svg'
import CapaBlog2 from '../../assets/bloco_image_2.svg'
import CapaBlog3 from '../../assets/bloco_image_3.svg'

import styles from './styles.module.scss'

export function Blog() {
  return (
    <main className={styles.blog}>
    <h1>Read Our Blog</h1>
    <h4>Far for away, behind the word mountains, far from the countries Vokalia and Consonantia. there live the blind texts.</h4>

    <div className={styles.CardsBlog}>

      <div className={styles.cards}>
        <img id="blog" src={CapaBlog1} alt="capa do blog"/>
        <h2>Quick-start guide to nuts and seeds</h2>

        <div className={styles.perfilImage}>
          <p>Kevin Ibrahim</p>
        </div>
      </div>

      <div className={styles.cards}>
        <img src={CapaBlog2} alt="capa do blog"/>
        <h2>Nutrition: Tips for Improving Your Health</h2>

        <div className={styles.perfilImage}>
          <p>Mike Jackson</p>
        </div>
      </div>

      <div className={styles.cards}>
        <img src={CapaBlog3} alt="capa do blog"/>
        <h2>The top 10 benefits of eating healthy</h2>

        <div className={styles.perfilImage}>
          <p>Bryan McGregor</p>
        </div>
      </div>
    </div>

  </main>
  );
}