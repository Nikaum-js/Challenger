import { HiSearch } from 'react-icons/hi'
import illustrationCalories from '../../assets/Illustration.svg'

import styles from './styles.module.scss';

export function Header() {
  return (
    <main>

      <div className={styles.search}>
        <h1 className={styles.titleHeader}>Ready for Trying a new recipe?</h1>
        <input
         placeholder="Search healthy recipes"
        />
          <HiSearch className={styles.icon} />
      </div>  

      <figure>
        <img src={illustrationCalories} alt="ilustração nutricional" />
      </figure>
    </main>
  );
}