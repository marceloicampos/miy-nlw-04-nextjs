import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/marceloicampos.png" alt="Marcelo I Campos" />
      <div>
        <strong>Marcelo I Campos</strong>
        <p>
          <img src="./icons/level.svg" alt="Leve l" />
          Level 1
        </p>
      </div>
    </div>
  )
}
