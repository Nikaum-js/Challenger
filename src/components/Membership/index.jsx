import memberImg from '../../assets/bloco_final_image.svg'

import styles from './styles.module.scss'

export function Membership() {
  return (
    <main className={styles.Membership}>
      <section className={styles.Address}>
        <h1>Join our membership to get special offer</h1>
        <input
         placeholder="Enter your email address" 
        />
        <button>Join</button>
      </section>

      <div className={styles.MembershipFigure}>
        <img src={memberImg} alt="membros" />
      </div>
    </main>
  );
}