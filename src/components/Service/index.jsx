import IllustrationServices from '../../assets/bloco_services.svg'

import styles from './styles.module.scss'

export function Service() {
  return (
    <main className={styles.containerService}>
      <div className={styles.boxImage}>
        <img src={IllustrationServices} alt="serviços"/>
      </div>

      <div className={styles.contentServices}>
        <h1>The best services ready To serve you</h1>
        <p>Far far away, behind the word mountains, far from
        the countries Vokalia and Consonantia, there live the
        blind texts.</p>

        <br/>

        <p>Separated they live in Bookmarksgrove right at the
        coast of the Semantics, a large language ocean</p>
      
        <br/>

        <p>A small river named Duden flows by their place and
        supplies it with the necessary regelialia.
        </p>

        <br/>

        <button>Know More</button>

      </div>
    </main>
  );
}