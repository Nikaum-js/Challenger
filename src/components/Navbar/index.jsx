import styles from './styles.module.scss'

export function Navbar() {
  return (
    <nav>
      <h1 className={styles.logo}>Healthy Food</h1>


      <ul>
        <li>HEALTHY RECIPES</li>
        <li>BLOG</li>
        <li>JOIN</li>
        <li> <button>REGISTER</button> </li>
      </ul>
    </nav>
  );
}