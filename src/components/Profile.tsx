import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/marceloicampos.png" alt="Git Hub Marcelo I Campos" />
      <div>
        <a href="https://github.com/marceloicampos" target="_blank"><strong>Marcelo I Campos</strong></a>
        <p>
          <img src="./icons/level.svg" alt="Leve l" />
          Level 1
        </p>
      </div>
    </div>
  );
}
