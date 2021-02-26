import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/marceloicampos.png" alt="Git Hub Marcelo I Campos" />
      <div>
        <a href="https://github.com/marceloicampos" target="_blank"><strong>Marcelo I Campos</strong></a>
        <p>
          <img src="./icons/level.svg" alt="Leve l" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
