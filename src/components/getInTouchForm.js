// styles import
import styles from "../styles/form.module.scss";

export default function GetInTouchForm() {
  return (
    <div className={styles.formDiv}>
      <form className={styles.form}>
        <label className={styles.inputGroup}>
          <p>Your name*</p>

          <input type="text" placeholder="Your name" required />
        </label>

        <label className={styles.inputGroup}>
          <p>E-mail*</p>

          <input type="email" placeholder="Your Email" required />
        </label>

        <label className={styles.inputGroup}>
          <p>Website</p>

          <input type="url" placeholder="Your Website" />
        </label>

        <div className={styles.radioWrapper}>
          <p>Pricing model</p>

          <div className={styles.radioGrid}>
            <label className={styles.radioCard}>
              <input type="radio" name="pricing" value="retainer" />

              <span>Design Retainer</span>
            </label>

            <label className={styles.radioCard}>
              <input type="radio" name="pricing" value="single" />

              <span>Single Project</span>
            </label>
          </div>
        </div>

        <label className={styles.inputGroup}>
          <p>Message</p>

          <textarea placeholder="Your Message"></textarea>
        </label>

        <button type="submit" className={styles.submitBtn}>
          <span>Get in touch</span>
        </button>
      </form>
    </div>
  );
}
