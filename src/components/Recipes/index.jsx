import comida1 from '../../assets/comida_1.svg'
import comida2 from '../../assets/comida_2.svg'
import comida3 from '../../assets/comida_3.svg'
import comida4 from '../../assets/comida_4.svg'

import styles from './styles.module.scss'

export function Recipes() {
  return (
    <main className={styles.recipes}>
      <h1>Our Best Recipes</h1>
      <h4>Far for away, behind the word mountains, far from the countries Vokalia and Consonantia. there live the blind texts.</h4>

      <div className={styles.boxCards}>
        <div className={styles.card}>
          <img src={comida1} alt="comidas" />
          <div className={styles.contentBox}>
          <h2>Broccoli Salad with Bacon</h2>
          <button>See Recipe</button>
          </div>
        </div>
        <div className={styles.card}>
          <img src={comida2} alt="comidas" />
          <div className={styles.contentBox}>
          <h2>Classic Beef Burgers</h2>
          <button>See Recipe</button>
          </div>
        </div>
        <div className={styles.card}>
          <img src={comida3} alt="comidas" />
          <div className={styles.contentBox}>
          <h2>Classic Potato Salad</h2>
          <button>See Recipe</button>
          </div>
        </div>
        <div className={styles.card}>
          <img src={comida4} alt="comidas" />
          <div className={styles.contentBox}>
          <h2>Cherry Cobbler on the Grill</h2>
          <button>See Recipe</button>
          </div>
        </div>
      </div>
    </main>
  );
}