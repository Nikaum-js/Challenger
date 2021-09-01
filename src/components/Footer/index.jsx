import styles from './styles.module.scss'

export function Footer() {
  return (
    <footer>
      <span>© Copyrights 2019 Stack. All Rights Reserved. </span>
      
      <div className={styles.TermsAndConditions}>
        <span>Privacy Policy</span>
        <span>Terms and Conditions</span>
      </div>
    </footer>
  );
}